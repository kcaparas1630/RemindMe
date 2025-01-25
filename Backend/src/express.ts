import './db';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import rateLimit from 'express-rate-limit';
import passport from 'passport';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerConfig from './Config/SwaggerConfig';
import * as routers from './routes/index';

const app = express();
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // limit each ip to 10 requests per window/minute
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(compression());
app.use(cors());
app.use(limiter);
app.use(passport.initialize());
app.use('/api/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerConfig)));

//Routes
app.use('/api', [routers.taskRouter, routers.userRouter, routers.healthRouter]);
export default app;
