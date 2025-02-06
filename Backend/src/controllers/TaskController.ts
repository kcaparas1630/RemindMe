import { Request, Response, NextFunction } from 'express';
import { DatabaseService } from '../db';
import logger from '../Config/loggerConfig';
import DatabaseError from '../ErrorHandlers/DatabaseError';
import ErrorLogger from '../Helper/LoggerFunc';
import ValidationError from '../ErrorHandlers/ValidationError';

// get method by task
const getAllTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const task = await DatabaseService.getTasks();
    const body = task.map((row: object) => {
      return row;
    });
    res.status(200).send(body);
  } catch (error: unknown) {
    // DRY ERROR LOGGER
    ErrorLogger(error, 'getAllTask');
    // Pass error to error handler middleware
    next(new DatabaseError('Unable to fetch tasks', error));
  }
};

// Create a task
const createTask = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { taskName, taskDescription, taskProgress, taskDueDate } = req.body;
    const requestBody = await DatabaseService.addTask(
      taskName,
      taskDescription,
      taskProgress,
      new Date(taskDueDate)
    ); // TODO: CREATE AN INTERFACE FOR THE REQUEST BODY
    // TODO: CREATE A FORBIDDEN ROUTE FOR MULTIPLE TASKNAME
    logger.info('Task has been successfully been added');
    res.status(201).json({
      success: true,
      message: 'Task has successfully been added',
      data: requestBody,
    });

  } catch (error: unknown) {
    // DRY ERROR LOGGER
    ErrorLogger(error, 'createTask');
    // Pass error to error handler middleware
    next(new DatabaseError('Unable to add tasks', error));
  }
};

const getTaskByTaskName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { taskName } = req.body;

    // throw error if missing task name
    if (!taskName) {
        throw new ValidationError('Task Name is required');
    }
    const requestBody = await DatabaseService.getTaskByTaskName(taskName);

    if (!requestBody) {
        throw new DatabaseError('Task not found');
    }
    res.status(200).send(requestBody);
  } catch (error) {
    // DRY ERROR LOGGER
    ErrorLogger(error, 'getTaskByTaskName');
    // Pass error to error handler middleware
    next(new DatabaseError('Unable to fetch the task', error));
  }
};

export { getAllTask, createTask, getTaskByTaskName };
