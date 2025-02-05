import { Request, Response } from 'express';
import { DatabaseService } from '../db';

// get method by task
const getAllTask = async (req: Request, res: Response): Promise<void> => {
  // ORM connector
  const task = await DatabaseService.getTasks();
  const body = task.map((row: object) => {
    return row;
  });
  res.status(200).send(body);
};

// Create a task

const createTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { taskName, taskDescription, taskProgress, taskDueDate} = req.body;
        const requestBody = await DatabaseService.addTask(
            taskName,
            taskDescription,
            taskProgress,
            new Date(taskDueDate),
        );

        res.status(201).json({
            success: true,
            message: 'Task has successfully been added',
            data: requestBody,
        })
        // Will edit this in next pull request for error handling
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch tasks',
            message: 'Internal Server Error'
        })
    }
}

const getTaskByTaskName = async (req: Request, res: Response): Promise<void> => {
    try {
        const { taskName } = req.body;
        const requestBody = await DatabaseService.getTaskByTaskName(taskName);
        console.log('Response', Promise.resolve(requestBody));
        res.status(200).send(requestBody);

    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch task',
            message: 'Internal Server Error'
        });
    }
}

export { getAllTask, createTask, getTaskByTaskName };
