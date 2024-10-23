import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/task';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send('Testing');
});
app.use('/api/task', router);

app.listen(port, () => {
    console.log(`[Server]: Server is running at http://localhost:${port}`);
});
