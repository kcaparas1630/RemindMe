import { Router } from 'express';
import { getAllUser, getUserById, loginUser, registerUser } from '../controllers/UserController';
import validate from '../middleware/validation-schema';
import { userRegisterValidationSchema, userLoginValidationSchema } from '../dto/createUser-schema';

const router = Router();

router.route('/user').get(getAllUser);

router.route('/user/register').post(validate(userRegisterValidationSchema), registerUser);
router.route('/user/login').post(validate(userLoginValidationSchema), loginUser);

// special getter for getting user id
router.get('/user/:id', getUserById);

export default router;
