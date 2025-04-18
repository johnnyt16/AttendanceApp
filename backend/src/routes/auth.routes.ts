import {Router} from 'express';
import { register, login } from '../controllers/auth.controller';
import { requireAuth } from '../middlewares/auth.middleware';
import * as schoolCtrl from '../controllers/school.controller';

const router = Router();

router.post('/register', register)
router.post('/login', login);
router.get('/', requireAuth('admin', 'teacher'), schoolCtrl.listMySchools);
router.post('/', requireAuth('admin'), schoolCtrl.createSchool);

export default router;
