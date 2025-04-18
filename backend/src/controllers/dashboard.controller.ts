// src/controllers/dashboard.controller.ts
import { Request, Response } from 'express';
import db from '../config/db';

/**
 * Calculate a quick “time‑ago” string such as
 * “just now”, “5 mins ago”, “2 hours ago”, etc.
 */
function timeAgo(date: string | Date | null): string {
    if (!date) return 'never';
    const diff   = Date.now() - new Date(date).getTime();
    const mins   = Math.floor(diff / 60_000);
    if (mins < 1)  return 'just now';
    if (mins === 1) return '1 min ago';
    if (mins < 60)  return `${mins} mins ago`;
    const hrs = Math.floor(mins / 60);
    return `${hrs} hour${hrs > 1 ? 's' : ''} ago`;
}

/**
 * GET  /dashboard
 * Returns summary stats, recent classes, and camera status
 * for the logged‑in user (admin or teacher).
 */
export const getDashboardStats = async (req: Request, res: Response) => {
    try {
        /* ------------------------------------------------------------------ */
        /* 1.  User context                                                   */
        /* ------------------------------------------------------------------ */
        const user = req.user!;                         // populated by auth middleware
        const isAdmin     = user.role === 'admin';
        const schoolId    = user.school_id;
        const teacherId   = user.user_id;

        /* ------------------------------------------------------------------ */
        /* 2.  All students this user can “see”                               */
        /* ------------------------------------------------------------------ */
        const studentRes = await db.query(
            isAdmin
                ? `SELECT id FROM students WHERE school_id = $1`
                : `SELECT s.id
             FROM students s
             JOIN enrollments e ON e.student_id = s.id
             JOIN classes     c ON c.id = e.class_id
            WHERE c.teacher_id = $1
              AND c.school_id  = $2`,
            isAdmin ? [schoolId] : [teacherId, schoolId]
        );
        const studentIds: string[] = studentRes.rows.map(r => r.id);

        /* ------------------------------------------------------------------ */
        /* 3.  Attendance TODAY                                               */
        /* ------------------------------------------------------------------ */
        let presentToday = 0;
        let absentToday  = 0;

        if (studentIds.length) {
            const idArray = studentIds;                         // keep name short
            const { rows: pres } = await db.query(
                `SELECT 1
           FROM attendance_records
          WHERE status     = 'present'
            AND date       = CURRENT_DATE
            AND student_id = ANY($1::uuid[])`,
                [idArray]
            );
            const { rows: abs }  = await db.query(
                `SELECT 1
           FROM attendance_records
          WHERE status     = 'absent'
            AND date       = CURRENT_DATE
            AND student_id = ANY($1::uuid[])`,
                [idArray]
            );
            presentToday = pres.length;
            absentToday  = abs.length;
        }

        const totalStudents  = studentIds.length;
        const attendanceRate = totalStudents
            ? ((presentToday / totalStudents) * 100).toFixed(1) + '%'
            : '0%';

        /* ------------------------------------------------------------------ */
        /* 4.  Recent classes (≤ 6)                                           */
        /* ------------------------------------------------------------------ */
        const classRes = await db.query(
            isAdmin
                ? `SELECT c.id,
                 c.name,
                 u.full_name                         AS teacher,
                 COUNT(ar.*) FILTER (WHERE ar.status='present') AS present,
                 COUNT(ar.*) FILTER (WHERE ar.status='absent')  AS absent,
                 MAX(ar.created_at)                  AS last_scan
            FROM classes  c
            JOIN users    u ON u.id = c.teacher_id
            LEFT JOIN attendance_records ar ON ar.class_id = c.id
           WHERE c.school_id = $1
        GROUP BY c.id, u.full_name
        ORDER BY last_scan DESC NULLS LAST
           LIMIT 6`
                : `SELECT c.id,
                 c.name,
                 u.full_name                         AS teacher,
                 COUNT(ar.*) FILTER (WHERE ar.status='present') AS present,
                 COUNT(ar.*) FILTER (WHERE ar.status='absent')  AS absent,
                 MAX(ar.created_at)                  AS last_scan
            FROM classes  c
            JOIN users    u ON u.id = c.teacher_id
            LEFT JOIN attendance_records ar ON ar.class_id = c.id
           WHERE c.teacher_id = $1
             AND c.school_id  = $2
        GROUP BY c.id, u.full_name
        ORDER BY last_scan DESC NULLS LAST
           LIMIT 6`,
            isAdmin ? [schoolId] : [teacherId, schoolId]
        );

        const recentClasses = classRes.rows.map(c => ({
            id:      c.id,
            name:    c.name,
            teacher: c.teacher,
            present: Number(c.present),
            absent:  Number(c.absent),
            lastScan: timeAgo(c.last_scan),
            status:  Math.random() < 0.7 ? 'online' : 'offline'   // placeholder until you track live class status
        }));

        /* ------------------------------------------------------------------ */
        /* 5.  Cameras + latest capture info                                  */
        /* ------------------------------------------------------------------ */
        const camRes = await db.query(
            `SELECT cam.id,
              cam.location,
              cam.status,
              COALESCE(latest.captured_at, cam.created_at) AS last_scan,
              COALESCE(latest.student_count, 0)            AS students_scanned
         FROM cameras AS cam
  LEFT JOIN LATERAL (
           SELECT cap.captured_at,
                  COUNT(rf.*) AS student_count
             FROM camera_captures cap
             LEFT JOIN recognized_faces rf ON rf.capture_id = cap.id
            WHERE cap.camera_id = cam.id
           GROUP BY cap.captured_at
         ORDER BY cap.captured_at DESC
            LIMIT 1
       ) AS latest ON TRUE
        WHERE ${
                isAdmin
                    ? 'cam.school_id = $1'
                    : 'EXISTS (SELECT 1 FROM classes c WHERE c.id = cam.class_id AND c.teacher_id = $1)'
            }
     ORDER BY last_scan DESC NULLS LAST`,
            isAdmin ? [schoolId] : [teacherId]
        );

        const cameras = camRes.rows.map(c => ({
            id:              c.id,
            location:        c.location,
            status:          c.status,
            lastScan:        timeAgo(c.last_scan),
            studentsScanned: Number(c.students_scanned)
        }));

        /* ------------------------------------------------------------------ */
        /* 6.  Respond                                                        */
        /* ------------------------------------------------------------------ */
        res.json({
            totalStudents,
            presentToday,
            absentToday,
            attendanceRate,
            recentClasses,
            cameras
        });
    } catch (err) {
        console.error('[dashboard] error:', err);
        res.sendStatus(500);
    }
};
