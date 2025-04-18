import { Request, Response, NextFunction, RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export interface AuthRequest extends Request {
    user?: { userId: string; role: 'admin' | 'teacher'; schoolId: string };
}

export const requireAuth =
    (...allowedRoles: ('admin' | 'teacher')[]): RequestHandler =>
        (req: AuthRequest, res: Response, next: NextFunction): void => {
            const header = req.headers.authorization;

            // No token
            if (!header?.startsWith('Bearer ')) {
                res.sendStatus(401);
                return;
            }

            try {
                const payload = jwt.verify(header.split(' ')[1], JWT_SECRET) as AuthRequest['user'] | null;

                // Empty / malformed payload
                if (!payload) {
                    res.sendStatus(401);
                    return;
                }

                // Role check
                if (allowedRoles.length && !allowedRoles.includes(payload.role)) {
                    res.sendStatus(403);
                    return;
                }

                req.user = payload;
                next();
            } catch {
                res.sendStatus(401);
            }
        };