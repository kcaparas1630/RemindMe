import express from 'express';
import cors from 'cors';
import * as routers from './routes/index';

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use('/api', routers.taskRouter);
