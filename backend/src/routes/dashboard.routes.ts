import { Router } from 'express';
import { getDashboardStats } from '../controllers/dashboard.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router();
router.get('/', requireAuth('admin', 'teacher'), getDashboardStats);
export default router;
