import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from "../config/db";

const JWT_SECRET = process.env.JWT_SECRET!;

export const register = async (req: Request, res: Response): Promise<void> => {
    const { email, password, name, role } = req.body;

    if (!email || !password || !name) {
        console.log('Missing fields:', { email, password, name });
        return void res.status(400).json({ message: 'Missing fields' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.query(
            'INSERT INTO users (email, password_hash, full_name, role) VALUES ($1, $2, $3, $4) RETURNING id',
            [email, hashedPassword, name, role || 'teacher']
        );

        console.log('User registered:', result.rows[0]);
        return void res.status(201).json({ message: 'User registered', userId: result.rows[0].id });
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
            'SELECT id, email, password_hash, full_name, role FROM users WHERE email = $1',
            [email]
        );

        if (result.rows.length === 0) {
            return void res.status(401).json({ message: 'Invalid email or password' });
        }

        const user = result.rows[0];
        const match = await bcrypt.compare(password, user.password_hash);

        if (!match) {
            return void res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = jwt.sign(
            { userId: user.id, role: user.role },
            JWT_SECRET,
            { expiresIn: '2h' }
        );

        return void res.status(200).json({
            token,
            user: {
                id: user.id,
                name: user.full_name,
                email: user.email,
                role: user.role
            }
        });
    } catch (err) {
        console.error('Login error:', err);
        return void res.status(500).json({ message: 'Server error' });
    }
};
