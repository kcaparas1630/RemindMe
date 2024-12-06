import { Router } from 'express';
import { getAllTask, getTaskByName, postTask } from '../controllers/TaskController';
import validate from '../middleware/validation-schema';
import taskValidationSchema from '../dto/createTask-schema';
import handleAuth from '../Helper/handleAuth';

const router = Router();

router.route('/task')
    .get(getAllTask)
    .post(
        handleAuth,
        validate(taskValidationSchema), 
        postTask
    );

// special getter for task name
router.get('/task/:name', getTaskByName);

export default router;
