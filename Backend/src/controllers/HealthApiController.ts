import { Response } from "express";

const checkHealth = (res: Response) => {
    res.status(200).send('API is healthy and ready!');
};

export default checkHealth;
