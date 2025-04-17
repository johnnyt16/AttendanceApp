import express from 'express';
import { Request, Response } from 'express';
import authRoutes from './routes/auth.routes';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(express.json());
app.get('/health', (req: Request, res: Response) => {
    res.send('OK');
});
app.use('/auth', authRoutes);

export default app;
