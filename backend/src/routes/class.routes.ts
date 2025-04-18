import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.middleware';
import * as classCtrl from '../controllers/class.controller';
import {getClassAttendance} from "../controllers/class.controller";

const router = Router();

router.post('/', requireAuth('admin'), classCtrl.createClass);
router.get('/', requireAuth('admin', 'teacher'), classCtrl.listClasses);
router.get(
    '/:classId/attendance',
    requireAuth('admin', 'teacher'),
    getClassAttendance
);
export default router;
