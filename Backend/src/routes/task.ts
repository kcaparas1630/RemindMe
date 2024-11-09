import { Router, Request, Response } from 'express';
import { getTask, postTask } from '../controllers/TaskController';

const router = Router();

router.route('/task')
    .get(getTask)
    .post(postTask);

export default router;
