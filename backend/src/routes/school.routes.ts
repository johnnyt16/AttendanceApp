import { Router } from 'express';
import { requireAuth } from '../middlewares/auth.middleware';
import * as schoolCtrl from '../controllers/school.controller';

const router = Router();

router.post('/',  requireAuth('admin'),            schoolCtrl.createSchool);
router.get('/',   requireAuth('admin', 'teacher'), schoolCtrl.listMySchools);

export default router;
