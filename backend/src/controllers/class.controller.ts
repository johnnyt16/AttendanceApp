import {Request, Response} from 'express';
import pool from '../config/db';

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
