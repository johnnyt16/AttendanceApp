import { Request, Response } from 'express';
import db from '../config/db';
import pool from "../config/db";

export const getDashboardStats = async (req: Request, res: Response) => {
    try {
        const user = req.user!;

        // Get total students at the school
        const totalStudentsResult = await db.query(
            'SELECT COUNT(*) FROM students WHERE school_id = $1',
            [user.school_id]
        );
        const totalStudents = Number(totalStudentsResult.rows[0].count);

        // Get today's present and absent counts
        const presentResult = await db.query(
            `SELECT COUNT(*) FROM attendance_records
             WHERE date = CURRENT_DATE AND status = 'present'
               AND student_id IN (
                 SELECT id FROM students WHERE school_id = $1
             )`,
            [user.school_id]
        );
        const absentResult = await db.query(
            `SELECT COUNT(*) FROM attendance_records
             WHERE date = CURRENT_DATE AND status = 'absent'
               AND student_id IN (
                 SELECT id FROM students WHERE school_id = $1
             )`,
            [user.school_id]
        );

        const presentToday = Number(presentResult.rows[0].count);
        const absentToday = Number(absentResult.rows[0].count);

        const attendanceRate = totalStudents
            ? ((presentToday / totalStudents) * 100).toFixed(1) + '%'
            : '0%';

        // Get recent classes with attendance
        const recentClassesResult = await db.query(
            `SELECT c.id, c.name, u.full_name AS teacher,
            COUNT(ar.*) FILTER (WHERE ar.status = 'present') AS present,
            COUNT(ar.*) FILTER (WHERE ar.status = 'absent') AS absent,
            MAX(ar.created_at) AS last_scan
            FROM classes c
            JOIN users u ON c.teacher_id = u.id
            LEFT JOIN attendance_records ar ON ar.class_id = c.id AND ar.date = CURRENT_DATE
            WHERE c.school_id = $1
            GROUP BY c.id, u.full_name
            ORDER BY last_scan DESC NULLS LAST
            LIMIT 6`,
            [user.school_id]
        );

        const recentClasses = recentClassesResult.rows.map((c) => ({
            id: c.id,
            name: c.name,
            teacher: c.teacher,
            present: Number(c.present),
            absent: Number(c.absent),
            time: new Date(c.last_scan).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            lastScan: timeAgo(c.last_scan),
            schedule: 'N/A', // Placeholder unless you add schedule to the DB
            status: Math.random() < 0.7 ? 'online' : 'offline', // Random for now
        }));

        const { rows: cameraRows } = await pool.query(`
            SELECT id, location, status, last_scan, students_scanned
            FROM cameras
            WHERE school_id = $1
        `, [user.school_id]);

        const cameras = cameraRows.map((c) => ({
            id: c.id,
            location: c.location,
            status: c.status,
            lastScan: timeAgo(c.last_scan),
            studentsScanned: Number(c.students_scanned),
        }));

        res.json({
            totalStudents,
            presentToday,
            absentToday,
            attendanceRate,
            recentClasses,
            cameras,
        });
    } catch (err) {
        console.error(err);
        res.sendStatus(500);
    }
};

function timeAgo(date: string | null): string {
    if (!date) return 'never';
    const diff = Date.now() - new Date(date).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'just now';
    if (minutes === 1) return '1 min ago';
    if (minutes < 60) return `${minutes} mins ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
}