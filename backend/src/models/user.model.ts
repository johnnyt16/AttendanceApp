import pool from '../config/db';

export const createUser = async (email: string, password_hash: string, full_name: string, role: string) => {
    const res = await pool.query(
        `INSERT INTO users (email, password_hash, full_name, role)
     VALUES ($1, $2, $3, $4)
     RETURNING id, email, full_name, role`,
        [email, password_hash, full_name, role]
    );
    return res.rows[0];
};

export const findUserByEmail = async (email: string) => {
    const res = await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);
    return res.rows[0];
};
