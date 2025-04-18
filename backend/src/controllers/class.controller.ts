import {Request, Response} from 'express';
import pool from '../config/db';
import db from "../config/db";

const todayISO = () => new Date().toISOString().split('T')[0];

export const getClassAttendance = async (req: Request, res: Response) => {
    try {
        const { classId } = req.params;
        const date       = (req.query.date as string) || todayISO();
        const user       = req.user!;
        const isAdmin    = user.role === 'admin';

        /* ------------------------------------------------------------------ */
        /* 1.  Authorisation – must teach the class unless admin              */
        /* ------------------------------------------------------------------ */
        const authSQL = isAdmin
            ? `SELECT id, name, teacher_id FROM classes WHERE id = $1`
            : `SELECT id, name, teacher_id
           FROM classes
          WHERE id = $1 AND teacher_id = $2`;
        const authRes = await db.query(
            authSQL,
            isAdmin ? [classId] : [classId, user.user_id]
        );
        if (authRes.rowCount === 0) return void res.sendStatus(404);

        const classRow   = authRes.rows[0];

        /* ------------------------------------------------------------------ */
        /* 2.  All enrolled students for the class                            */
        /* ------------------------------------------------------------------ */
        const studentRes = await db.query(
            `SELECT s.id,
              s.full_name AS name
         FROM enrollments e
         JOIN students    s ON s.id = e.student_id
        WHERE e.class_id = $1
        ORDER BY s.full_name`,
            [classId]
        );

        /* ------------------------------------------------------------------ */
        /* 3.  Attendance records for that date                               */
        /* ------------------------------------------------------------------ */
        const attRes = await db.query(
            `SELECT ar.student_id,
                    ar.status,
                    to_char(ar.created_at, 'HH12:MI AM') AS time,
                    (rf.confidence_score IS NOT NULL)    AS photo_verified,
                    ''                                   AS notes
             FROM attendance_records ar
                      LEFT JOIN recognized_faces rf
                                ON rf.student_id = ar.student_id
                                    AND rf.capture_id = (
                                        SELECT cap.id
                                        FROM camera_captures cap
                                        WHERE cap.class_id = $1
                                          AND DATE(cap.captured_at) = $2::date
                                        ORDER BY cap.captured_at DESC
                                        LIMIT 1
                                    )
             WHERE ar.class_id = $1
               AND ar.date     = $2::date`,
            [classId, date]
        );

        const attMap = new Map<string, any>();
        attRes.rows.forEach(r => attMap.set(r.student_id, r));

        /* ------------------------------------------------------------------ */
        /* 4.  Build response                                                 */
        /* ------------------------------------------------------------------ */
        let present = 0, absent = 0, late = 0, excused = 0;

        const students = studentRes.rows.map((s, idx) => {
            const rec = attMap.get(s.id) ?? {};
            const status = rec.status ?? 'absent';
            if (status === 'present') present++;
            else if (status === 'late') late++;
            else if (status === 'excused') excused++;
            else absent++;

            return {
                id: idx + 1,
                name: s.name,
                status,
                time: rec.time ?? '-',
                photoVerified: !!rec.photo_verified,
                notes: rec.notes ?? ''
            };
        });

        res.json({
            id: classRow.id,
            name: classRow.name,
            date,
            teacher: classRow.teacher_id,    // look up full name later if needed
            totalStudents: students.length,
            present,
            absent,
            late,
            excused,
            students
        });
    } catch (err) {
        console.error('[class attendance] ', err);
        res.sendStatus(500);
    }
};

export const createClass = async (req: Request, res: Response) => {
    const { name, teacherId } = req.body;
    if (!name || !teacherId) res.status(400).json({ message: 'Missing fields' });

    const { school_id } = req.user!;
    const { rows } = await pool.query(
        `INSERT INTO classes (name, teacher_id, school_id) VALUES ($1,$2,$3) RETURNING *`,
        [name, teacherId, school_id]
    );
    res.status(201).json(rows[0]);
};

export const listClasses = async (req: Request, res: Response) => {
    const { role, school_id, user_id } = req.user!;
    const { rows } = await pool.query(
        role === 'teacher'
            ? `SELECT * FROM classes WHERE school_id=$1 AND teacher_id=$2`
            : `SELECT * FROM classes WHERE school_id=$1`,
        role === 'teacher' ? [school_id, user_id] : [school_id]
    );
    res.json(rows);
};
