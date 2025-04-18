export interface AuthPayload {
    user_id: string;
    role: 'admin' | 'teacher';
    school_id: string;
}

export interface AuthenticatedRequest extends Request {
    user: AuthPayload;
}