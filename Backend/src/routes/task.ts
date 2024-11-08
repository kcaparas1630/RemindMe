import { Router, Request, Response } from 'express';
import getTask from '../controllers/TaskController';

const router = Router();

router.route('/task').get(getTask);

export default router;
