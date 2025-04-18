import { Request, Response } from 'express';
import pool from '../config/db';

export const bulkRecord = async (req: Request, res: Response) => {
    const records = req.body as {
        studentId: string;
        classId: string;
        date: string; // ISO yyyy-mm-dd
        status: 'present' | 'absent' | 'late' | 'excused';
    }[];

    if (!Array.isArray(records) || records.length === 0) {
        res.status(400).json({ message: 'Invalid payload' });
        return;
    }

    const valuesSql = records
        .map(
            (_r, i) =>
                `($${i * 5 + 1}, $${i * 5 + 2}, $${i * 5 + 3}, $${i * 5 + 4}, $${i * 5 + 5})`
        )
        .join(',');

    const params = records.flatMap((r) => [
        r.studentId,
        r.classId,
        r.date,
        r.status,
        req.user!.user_id,
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
