import { Router, Request, Response } from 'express';

const router = Router();

const checkHealth = (req: Request, res: Response) => {
    res.status(200).send('NMP API is healthy and ready!');
  };
  
export default checkHealth;
