import { Request, Response } from 'express';

const checkHealth = (req: Request, res: Response): void => {
    console.log('Health check endpoint hit'); // Add logging
    try {
        res.status(200).send('Task API is healthy');
        console.log('Health check responded successfully'); // Add logging
    } catch (error) {
        console.error('Health check error:', error);
        res.status(500).send('Internal server error');
    }
};

export default checkHealth;
