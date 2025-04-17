export interface User {
    id: string;
    email: string;
    password_hash: string;
    full_name: string;
    role: 'admin' | 'teacher';
    created_at: string;
    updated_at: string;
}
