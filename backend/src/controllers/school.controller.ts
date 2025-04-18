import {RequestHandler, Response} from 'express';
import pool from '../config/db';
import { AuthRequest } from '../middlewares/auth.middleware';

export const createSchool: RequestHandler = async (req: AuthRequest, res: Response) => {
    const { name } = req.body;
    if (!name) res.status(400).json({ message: 'Name required' });

    const { rows } = await pool.query(
        `INSERT INTO schools (name) VALUES ($1) RETURNING *`,
        [name]
    );
    res.status(201).json(rows[0]);
};

export const listMySchools = async (req: AuthRequest, res: Response) => {
    const { role, schoolId } = req.user!;
    const sql =
        role === 'admin'
            ? 'SELECT * FROM schools'
            : 'SELECT * FROM schools WHERE id = $1';
    const params = role === 'admin' ? [] : [schoolId];

    const { rows } = await pool.query(sql, params);
    res.json(rows);
};
