import { Request, Response } from 'express';
import db from '../config/db';

export const getDashboardStats = async (req: Request, res: Response) => {
    try {
        console.log("ere");
        const user = req.user!;
        console.log('[dashboard] user:', JSON.stringify(user, null, 2));
        const isAdmin = user.role === 'admin';
        console.log('[dashboard] user:', JSON.stringify(user, null, 2));

        const studentQuery = isAdmin
            ? `SELECT * FROM students WHERE school_id = $1`
            : `SELECT s.* FROM students s
                                   JOIN enrollments e ON s.id = e.student_id
                                   JOIN classes c ON e.class_id = c.id
               WHERE c.teacher_id = $1 AND c.school_id = $2`;

        const studentParams = isAdmin
            ? [user.school_id]
            : [user.user_id, user.school_id];
        const studentResult = await db.query(studentQuery, studentParams);
        console.log('[dashboard] students:', studentResult.rows.length);

        const studentIds = studentResult.rows.map((s) => s.id);
        const studentIdList = studentIds.length
            ? `'${studentIds.join("','")}'`
            : '';

        let presentResult = { rows: [] }, absentResult = { rows: [] };
        if (studentIds.length > 0) {
            presentResult = await db.query(
                `SELECT * FROM attendance_records
                 WHERE status = 'present' AND student_id IN (${studentIdList})`
            );
            absentResult = await db.query(
                `SELECT * FROM attendance_records
                 WHERE status = 'absent' AND student_id IN (${studentIdList})`
            );
        }

        const totalStudents = studentResult.rows.length;
        const presentToday = presentResult.rows.length;
        const absentToday = absentResult.rows.length;
        const attendanceRate = totalStudents
            ? ((presentToday / totalStudents) * 100).toFixed(1) + '%'
            : '0%';

        const classQuery = isAdmin
            ? `SELECT c.id, c.name, u.full_name AS teacher,
                      COUNT(ar.*) FILTER (WHERE ar.status = 'present') AS present,
                      COUNT(ar.*) FILTER (WHERE ar.status = 'absent') AS absent,
                      MAX(ar.created_at) AS last_scan
               FROM classes c
                        JOIN users u ON c.teacher_id = u.id
                        LEFT JOIN attendance_records ar ON ar.class_id = c.id
               WHERE c.school_id = $1
               GROUP BY c.id, u.full_name
               ORDER BY last_scan DESC NULLS LAST
               LIMIT 6`
            : `SELECT c.id, c.name, u.full_name AS teacher,
                      COUNT(ar.*) FILTER (WHERE ar.status = 'present') AS present,
                      COUNT(ar.*) FILTER (WHERE ar.status = 'absent') AS absent,
                      MAX(ar.created_at) AS last_scan
               FROM classes c
                        JOIN users u ON c.teacher_id = u.id
                        LEFT JOIN attendance_records ar ON ar.class_id = c.id
               WHERE c.teacher_id = $1 AND c.school_id = $2
               GROUP BY c.id, u.full_name
               ORDER BY last_scan DESC NULLS LAST
               LIMIT 6`;

        const classParams = isAdmin
            ? [user.school_id]
            : [user.user_id, user.school_id];
        const recentClassesResult = await db.query(classQuery, classParams);
        console.log('[dashboard] recent classes:', recentClassesResult.rows);

        const recentClasses = recentClassesResult.rows.map((c) => ({
            id: c.id,
            name: c.name,
            teacher: c.teacher,
            present: Number(c.present),
            absent: Number(c.absent),
            time: new Date(c.last_scan).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            lastScan: timeAgo(c.last_scan),
            schedule: 'N/A',
            status: Math.random() < 0.7 ? 'online' : 'offline',
        }));

        const camerasQuery = isAdmin
            ? `SELECT * FROM cameras WHERE school_id = $1`
            : `SELECT cam.* FROM cameras cam
               JOIN classes c ON cam.class_id = c.id
               WHERE c.teacher_id = $1`;

        const camerasParams = isAdmin ? [user.school_id] : [user.user_id];
        const { rows: cameraRows } = await db.query(camerasQuery, camerasParams);
        console.log('[dashboard] cameras:', cameraRows);

        const cameras = cameraRows.map((c) => ({
            id: c.id,
            location: c.location,
            status: c.status,
            lastScan: timeAgo(c.created_at),
            studentsScanned: 0, // placeholder
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
        console.error('dashboard error:', err);
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