import { Router } from 'express';
import { getAllTask, createTask, getTaskByTaskName } from '../controllers/TaskController';
import validate from '../middleware/validation-schema';
import taskValidationSchema from '../dto/createTask-schema';
import handleAuth from '../Helper/handleAuth';

const router = Router();

router.route('/task').get(getAllTask).post(handleAuth, validate(taskValidationSchema), createTask);

// special getter for task name
router.get('/task/:name', getTaskByTaskName);

// router.patch('/task/:taskId/complete', 
//     handleAuth,
//     updateTaskCompletionHandler
//   );

export default router;
