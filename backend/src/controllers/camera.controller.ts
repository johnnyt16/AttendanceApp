import { Request, Response } from 'express';
import pool from '../config/db';
import path from 'path';
import { execFile } from 'child_process';
import { v4 as uuidv4 } from 'uuid';
import util from 'util';

const SYSTEM_USER_ID = '00000000-0000-0000-0000-000000000000';

const execFileAsync = util.promisify(execFile);

const UPLOAD_DIR = path.join(__dirname, '..', '..', 'uploads');
import fs from 'fs';
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR);

export const listCameras = async (req: Request, res: Response) => {
    const { school_id } = req.user!;

    const { rows } = await pool.query(
        `SELECT id, location, status, last_scan, students_scanned
     FROM cameras
     WHERE school_id = $1
     ORDER BY last_scan DESC`,
        [school_id]
    );

    res.json(rows);
};

export const reportCameraScan = async (req: Request, res: Response) => {
    const { cameraId, studentsScanned } = req.body;

    if (!cameraId || typeof studentsScanned !== 'number') {
        return void res.status(400).json({ message: 'Missing or invalid fields' });
    }

    const now = new Date();
    const { rowCount } = await pool.query(
        `UPDATE cameras
     SET last_scan = $1, students_scanned = $2, status = 'online'
     WHERE id = $3`,
        [now, studentsScanned, cameraId]
    );

    if (rowCount === 0) {
        return void res.status(404).json({ message: 'Camera not found' });
    }

    res.status(200).json({ message: 'Scan recorded' });
};

export const uploadCameraImage = async (req: Request, res: Response) => {
    try {
        const { deviceId } = req.params;
        const file = (req as any).file; // populated by multer
        console.log('[upload] started', deviceId);

        if (!file) return void res.status(400).json({ message: 'No file uploaded' });

        // 1. Look up camera
        const camRes = await pool.query(
            'SELECT id, school_id FROM cameras WHERE device_id = $1',
            [deviceId]
        );
        if (camRes.rowCount === 0)
            return void res.status(404).json({ message: 'Camera not registered' });

        const cameraId = camRes.rows[0].id;
        const schoolId = camRes.rows[0].school_id;
        const imagePath = file.path;

        // 2. Run the Python face recognition script
        const pyScript = path.join(__dirname, '..', '..', 'services', 'face_recognition_runner.py');

        let recognizedNames: string[] = [];
        try {
            const { stdout } = await execFileAsync('python', [pyScript, imagePath]);
            recognizedNames = JSON.parse(stdout); // should be array of names like "Rydell, Edward"
        } catch (err) {
            console.error('face‑rec error', err);
            return void res.sendStatus(500);
        }

        // 3. Map names to UUIDs
        const namePlaceholders = recognizedNames.map((_, i) => `$${i + 1}`).join(', ');
        const studentQuery = `
            SELECT id, full_name FROM students
            WHERE full_name = ANY(ARRAY[${namePlaceholders}]) AND school_id = $${recognizedNames.length + 1}
        `;
        const { rows: studentRows } = await pool.query(studentQuery, [...recognizedNames, schoolId]);

        const nameToIdMap: Record<string, string> = {};
        for (const student of studentRows) {
            nameToIdMap[student.full_name] = student.id;
        }

        // 4. Insert camera capture
        const captureId = uuidv4();
        await pool.query(
            `INSERT INTO camera_captures (id, camera_id, image_path, captured_at)
             VALUES ($1, $2, $3, now())`,
            [captureId, cameraId, imagePath]
        );

        // 5. Insert recognized students
        // TODO: This is hacky. Figure out how to generate embeddings with sanitized names
        for (const rawName of recognizedNames) {
            // Convert "Last,_First" → "First Last"
            const cleaned = rawName.replace(/_/g, ' ').trim();         // "Rydell, Edward"
            const parts = cleaned.split(',').map(s => s.trim());
            if (parts.length !== 2) {
                console.warn(`Skipping unrecognized format: ${rawName}`);
                continue;
            }

            const fullName = `${parts[1]} ${parts[0]}`;                // "Edward Rydell"

            const { rows } = await pool.query(
                `SELECT id FROM students WHERE full_name = $1`,
                [fullName]
            );

            if (rows.length === 0) {
                console.warn(`No DB match for: "${fullName}" from raw "${rawName}"`);
                continue;
            }

            const studentId = rows[0].id;

            try {
                await pool.query(
                    `INSERT INTO recognized_faces (capture_id, student_id, confidence_score)
                 VALUES ($1, $2, 1)
                 ON CONFLICT DO NOTHING`,
                    [captureId, studentId]
                );

                await pool.query(
                    `INSERT INTO attendance_records (student_id, class_id, date, status, marked_by)
                     SELECT $1, c.class_id, CURRENT_DATE, 'present', $2
                     FROM cameras c
                     WHERE c.id = $3
                     ON CONFLICT (student_id, class_id, date) DO UPDATE
                         SET status = 'present', marked_by = EXCLUDED.marked_by`,
                    [studentId, SYSTEM_USER_ID, cameraId] // ← systemUserId = dummy user UUID
                );
            } catch (err) {
                console.error('[DB ERROR]', rawName, JSON.stringify(err, null, 2));
            }
        }
        res.json({ ok: true, recognized: recognizedNames });
    } catch (e) {
        console.error(e);
        res.sendStatus(500);
    }
};

