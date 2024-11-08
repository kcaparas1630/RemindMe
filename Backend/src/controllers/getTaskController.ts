import { Request, Response } from 'express';

const getTask = (req: Request, res: Response) => {
    res.status(200).send('Hello World');
};

export default getTask;
