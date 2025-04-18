import { Router } from 'express';
import { listCameras, reportCameraScan } from '../controllers/camera.controller';
import { requireAuth } from '../middlewares/auth.middleware';

const router = Router();

router.get('/', requireAuth('admin', 'teacher'), listCameras);
router.post('/scan', reportCameraScan);

export default router;
