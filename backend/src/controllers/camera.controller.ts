import {Request, Response} from 'express';
import pool from '../config/db';

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
