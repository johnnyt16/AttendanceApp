import express from 'express';
import { Request, Response } from 'express';
import authRoutes from './routes/auth.routes';
import schoolRoutes from './routes/school.routes';
import classRoutes from './routes/class.routes';
import attendanceRoutes from './routes/attendance.routes';
import cors from 'cors';

const app = express();

app.use(
    cors({
        origin: 'http://localhost:5174',
        credentials: true,
    })
);
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
    res.send('OK');
});
app.use('/api/auth', authRoutes);
app.use('/api/schools', schoolRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/attendance', attendanceRoutes);

export default app;
