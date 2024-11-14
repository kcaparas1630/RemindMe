import { Router, Request, Response } from 'express';
import { getTask, postTask } from '../controllers/TaskController';
import validate from '../middleware/validation-schema';
import taskValidationSchema from '../dto/createTask-schema';

const router = Router();

router.route('/task')
    .get(getTask)
    .post(validate(taskValidationSchema), postTask);

export default router;
