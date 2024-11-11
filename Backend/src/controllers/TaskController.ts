import { Request, Response } from 'express';
import TaskInterface from '../Interface/taskInterface';
import { addData, query } from '../db';

const getTask = async (req: Request, res: Response): Promise<void> => {
    const task = await query('Select * from task');
    const body = task.rows.map((row: any) => row);
    res.status(200).send(body);
};

const postTask = async (req: Request, res: Response): Promise<void> => {
    try {
        let id = 1; // will update based on the current id in database
        const { task_name, task_description, task_progress } = req.body;
        console.log('Received data:', { task_name, task_description, task_progress });

        // // Validation check
        // if (!task_name || !task_description || !task_progress) {
        //     console.log('Validation failed');
        //     res.status(400).json({
        //         success: false,
        //         message: 'Missing required fields',
        //     });
        //     return;
        // }

        const result = await addData(
            id,
            task_name,
            task_description,
            task_progress
        );

        // Send success response
        res.status(201).json({
            success: true,
            message: 'Task has successfully been added',
            data: result.rows[0],
        });
    } catch (error) {
        console.error('Error in postTask:', error);
        if (!res.headersSent) {
            res.status(500).json({
                success: false,
                message: 'Internal server error',
            });
        }
    }
};

export { getTask, postTask };
