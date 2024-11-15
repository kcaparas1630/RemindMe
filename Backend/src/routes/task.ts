import { Router, Request, Response } from 'express';
import { getAllTask, getTaskByName, postTask } from '../controllers/TaskController';
import validate from '../middleware/validation-schema';
import taskValidationSchema from '../dto/createTask-schema';

const router = Router();

router.route('/task')
    .get(getAllTask)
    .post(validate(taskValidationSchema), postTask);

// special getter for task name
router.get('/task/:name', getTaskByName);

export default router;
