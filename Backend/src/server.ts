import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/task';
import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`[Server]: Server is running at http://localhost:${port}`);
});
