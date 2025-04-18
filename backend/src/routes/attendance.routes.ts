import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.middleware';
import * as attendCtrl from '../controllers/attendance.controller';
const router = Router();

router.post('/bulk', requireAuth('admin', 'teacher'), attendCtrl.bulkRecord);
export default router;
