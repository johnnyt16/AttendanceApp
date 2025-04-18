import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import {AuthPayload} from "../types/auth.types";

const JWT_SECRET = process.env.JWT_SECRET!;
type Role = 'admin' | 'teacher';

export const requireAuth =
    (...allowedRoles: Role[]): RequestHandler =>
        (req: Request, res: Response, next: NextFunction): void => {
            const header = req.headers.authorization;
            if (!header?.startsWith('Bearer ')) {
                return void res.sendStatus(401);
            }

            try {
                const token = header.split(' ')[1];
                const payload = jwt.verify(token, JWT_SECRET) as AuthPayload;

                if (allowedRoles.length && !allowedRoles.includes(payload.role)) {
                    return void res.sendStatus(403);
                }

                req.user = payload;
                next();
            } catch {
                return void res.sendStatus(401);
            }
        };