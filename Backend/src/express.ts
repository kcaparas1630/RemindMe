import './db';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import * as routers from './routes/index';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan('dev'));
app.use(compression());
app.use(cors());


//Routes
app.use('/api', [routers.taskRouter, routers.userRouter ]);

export default app;
