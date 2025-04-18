export interface User {
    id: string;
    email: string;
    password_hash: string;
    full_name: string;
    role: 'admin' | 'teacher';
    school_id: string;
    created_at: string;
    updated_at: string;
}
