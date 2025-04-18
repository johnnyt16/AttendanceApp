import {RequestHandler, Response} from 'express';
import pool from '../config/db';
import { AuthRequest } from '../middlewares/auth.middleware';

export const bulkRecord: RequestHandler = async (req: AuthRequest, res: Response) => {
    const records = req.body as {
        studentId: string;
        classId: string;
        date: string;   // ISO yyyy‑mm‑dd
        status: 'present' | 'absent' | 'late' | 'excused';
    }[];

    if (!Array.isArray(records) || !records.length)
        res.status(400).json({ message: 'Invalid payload' });

    // Build VALUES list: ($1,$2,$3,$4,$5), ($6,$7,$8,$9,$10) …
    const valuesSql = records
        .map(
            (_r, i) =>
                `($${i * 5 + 1}, $${i * 5 + 2}, $${i * 5 + 3}, $${i * 5 + 4}, $${
                    i * 5 + 5
                })`
        )
        .join(',');
    const params = records.flatMap((r) => [
        r.studentId,
        r.classId,
        r.date,
        r.status,
        req.user!.userId,
    ]);

    await pool.query(
        `INSERT INTO attendance_records 
    (student_id, class_id, date, status, marked_by)
     VALUES ${valuesSql}
     ON CONFLICT (student_id, class_id, date)
     DO UPDATE SET status = EXCLUDED.status`,
        params
    );

    res.json({ inserted: records.length });
};
