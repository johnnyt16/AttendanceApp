import { RequestHandler } from 'express';
import pool from '../config/db';
import { AuthenticatedRequest } from '../types/auth.types';

interface CreateSchoolBody {
    name: string;
}

export const createSchool: RequestHandler<{}, any, CreateSchoolBody> = async (
    req,
    res
) => {
    const user = (req as unknown as AuthenticatedRequest).user;

    if (!req.body.name) {
        res.status(400).json({ message: 'Name required' });
        return;
    }

    const { rows } = await pool.query(
        `INSERT INTO schools (name) VALUES ($1) RETURNING *`,
        [req.body.name]
    );

    res.status(201).json(rows[0]);
};

export const listMySchools: RequestHandler = async (req, res) => {
    const user = (req as unknown as AuthenticatedRequest).user!;
    const sql =
        user.role === 'admin'
            ? 'SELECT * FROM schools'
            : 'SELECT * FROM schools WHERE id = $1';
    const params = user.role === 'admin' ? [] : [user.school_id];

    const { rows } = await pool.query(sql, params);
    res.json(rows);
};
