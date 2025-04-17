import { Request, Response } from 'express';

export const register = (req: Request, res: Response) => {
    res.status(201).json({ message: 'Register endpoint working' });
};

export const login = (req: Request, res: Response) => {
    res.status(200).json({ message: 'Login endpoint working' });
};
