import { Router } from "express";
import { getAllUser, getUserById, registerUser } from "../controllers/UserController";
import validate from '../middleware/validation-schema';
import userValidationSchema from "../dto/createUser-schema";

const router  = Router();

router.route('/user')
    .get(getAllUser)

router.route('/user/register').post(validate(userValidationSchema), registerUser);

// special getter for getting user id
router.get('/user/:id', getUserById);

export default router;
