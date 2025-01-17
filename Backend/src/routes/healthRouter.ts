import express from 'express';
import checkHealth from '../controllers/HealthApiController';

const router = express.Router();

router.route('/health').get(checkHealth);

export default router;
