import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from "../config/db";

const JWT_SECRET = process.env.JWT_SECRET!;

export const register = async (req: Request, res: Response): Promise<void> => {
    const { email, password, name, role, school_id } = req.body;
    if (!email || !password || !name || !school_id) {
        return void res
            .status(400)
            .json({ message: 'Missing fields (email, password, name, school_id)' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.query(
            `INSERT INTO users (email, password_hash, full_name, role, school_id)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING id`,
            [email, hashedPassword, name, role || 'teacher', school_id]
        );

        return void res
            .status(201)
            .json({ message: 'User registered', user_id: result.rows[0].id });
    } catch (err: any) {
        console.error('Register error:', err);
        if (err.code === '23505') {
            return void res.status(409).json({ message: 'Email already registered' });
        }
        return void res.status(500).json({ message: 'Server error' });
    }
};

export const login = async (req: Request, res: Response): Promise<void> => {
    const { email, password } = req.body;
    if (!email || !password) {
        return void res.status(400).json({ message: 'Missing email or password' });
    }

    try {
        const result = await db.query(
            `SELECT id, email, password_hash, full_name, role, school_id
             FROM users
             WHERE email = $1`,
            [email]
        );

        if (result.rows.length === 0) {
            return void res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = result.rows[0];
        if (!(await bcrypt.compare(password, user.password_hash))) {
            return void res.status(401).json({ message: 'Invalid email or password' });
        }

        // **snake_case** payload
        const payload = {
            user_id: user.id,
            role: user.role,
            school_id: user.school_id
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });

        return void res.status(200).json({
            token,
            user: {
                user_id: user.id,
                name: user.full_name,
                email: user.email,
                role: user.role,
                school_id: user.school_id
            }
        });
    } catch (err) {
        console.error('Login error:', err);
        return void res.status(500).json({ message: 'Server error' });
    }
};
