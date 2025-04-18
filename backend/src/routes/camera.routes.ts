import { Router } from 'express';
import { listCameras, reportCameraScan, uploadCameraImage } from '../controllers/camera.controller';
import { requireAuth } from '../middlewares/auth.middleware';
import multer from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';

const router = Router();

const UPLOAD_DIR = path.join(__dirname, '..', '..', 'uploads');
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, UPLOAD_DIR);
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname) || '.jpg'; // fallback to .jpg
        cb(null, uuidv4() + ext);
    }
});

const upload = multer({ storage });

router.get('/', requireAuth('admin', 'teacher'), listCameras);
router.post('/scan', reportCameraScan);
// TODO require auth for uploading
router.post('/:deviceId/upload', upload.single('image'), uploadCameraImage);

export default router;
