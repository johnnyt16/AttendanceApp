import {Request, RequestHandler, Response} from 'express';
import pool from '../config/db';
import { AuthRequest } from '../middlewares/auth.middleware';

export const createClass: RequestHandler = async (req: AuthRequest, res: Response) => {
    const { name, teacherId } = req.body;
    if (!name || !teacherId) res.status(400).json({ message: 'Missing fields' });

    const { schoolId } = req.user!;
    const { rows } = await pool.query(
        `INSERT INTO classes (name, teacher_id, school_id) VALUES ($1,$2,$3) RETURNING *`,
        [name, teacherId, schoolId]
    );
    res.status(201).json(rows[0]);
};

export const listClasses = async (req: AuthRequest, res: Response) => {
    const { role, schoolId, userId } = req.user!;
    const { rows } = await pool.query(
        role === 'teacher'
            ? `SELECT * FROM classes WHERE school_id=$1 AND teacher_id=$2`
            : `SELECT * FROM classes WHERE school_id=$1`,
        role === 'teacher' ? [schoolId, userId] : [schoolId]
    );
    res.json(rows);
};
