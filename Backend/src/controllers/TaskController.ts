import { Request, Response } from 'express';
import TaskInterface from '../Interface/taskInterface';

const getTask = (req: Request, res: Response) => {
    res.status(200).send('Hello World');
};

const postTask = (req: Request, res: Response) => {
    const { task_name, task_description, task_progress } = req.body;

    if (task_name || task_description || task_progress == undefined) {
        res.status(400).json({
            success: false,
            message: 'Missing required fields',
        });
    }

    const newTask: TaskInterface = {
        task_name: task_name,
        task_descrption: task_description,
        task_progress: task_progress,
    };

    res.status(201).json({
        success: true,
        message: 'Task has successfully been added',
    });
};
export default getTask;
