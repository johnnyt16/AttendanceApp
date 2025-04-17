import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import db from "../config/db";

export const register = async (req: Request, res: Response) => {
    const { email, password, name, role } = req.body;

    if (!email || !password || !name) {
        console.log('Missing fields:', { email, password, name });
        return res.status(400).json({ message: 'Missing fields' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.query(
            'INSERT INTO users (email, password_hash, full_name, role) VALUES ($1, $2, $3, $4) RETURNING id',
            [email, hashedPassword, name, role || 'teacher']
        );

        console.log('User registered:', result.rows[0]);
        return res.status(201).json({ message: 'User registered', userId: result.rows[0].id });
    } catch (err: any) {
        console.error('Register error:', err);
        if (err.code === '23505') {
            return res.status(409).json({ message: 'Email already registered' });
        }
        return res.status(500).json({ message: 'Server error' });
    }
};

export const login = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Login endpoint working' });
};
