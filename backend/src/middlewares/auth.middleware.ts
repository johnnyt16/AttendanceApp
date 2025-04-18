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
                res.sendStatus(401); // Unauthorized
                return;
            }

            try {
                const token = header.split(' ')[1];
                const payload = jwt.verify(token, JWT_SECRET) as AuthPayload;

                // Role check
                if (allowedRoles.length && !allowedRoles.includes(payload.role)) {
                    res.sendStatus(403); // Forbidden
                    return;
                }

                req.user = payload;
                next();
            } catch (err) {
                res.sendStatus(401); // Invalid token
            }
        };
