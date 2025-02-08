import { Request, Response, NextFunction } from 'express';
import { DatabaseService } from '../db';
import logger from '../Config/loggerConfig';
import DatabaseError from '../ErrorHandlers/DatabaseError';
import ErrorLogger from '../Helper/LoggerFunc';
import ValidationError from '../ErrorHandlers/ValidationError';
import Task from '../Interface/taskInterface';
import checkTaskNameExists from '../Helper/TaskNameExists';

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
    const {
      taskName,
      taskDescription,
      taskProgress,
      taskDueDate,
    }: {
      taskName: Task['taskName'];
      taskDescription: Task['taskDescription'];
      taskProgress: Task['taskProgress'];
      taskDueDate: Task['taskDueDate'];
    } = req.body;

    const taskNameExists = await checkTaskNameExists(taskName);

    
    if(taskNameExists) {
        throw new ValidationError('Task Name Already Exists.');
    }
    const requestBody = await DatabaseService.addTask(
      taskName,
      taskDescription,
      taskProgress,
      new Date(taskDueDate)
    );
   
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

const getTaskByTaskName = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
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
