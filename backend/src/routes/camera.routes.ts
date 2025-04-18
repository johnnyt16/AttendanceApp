import { Router } from 'express';
import {listCameras, reportCameraScan, uploadCameraImage} from '../controllers/camera.controller';
import { requireAuth } from '../middlewares/auth.middleware';
import multer from 'multer';
import path from 'path';

const router = Router();
const upload = multer({ dest: path.join(__dirname, '..', '..', 'uploads') });

router.get('/', requireAuth('admin', 'teacher'), listCameras);
router.post('/scan', reportCameraScan);

router.post('/:deviceId/upload', upload.single('image'), uploadCameraImage);

export default router;
