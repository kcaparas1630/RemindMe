import { Request, Response } from 'express';
import { addTaskData, query } from '../db';
import TaskProgressContants from '../Constants/TaskProgress';

const getAllTask = async (req: Request, res: Response): Promise<void> => {
  const task = await query('Select * from task');
  const body = task.rows.map((row: object) => {
    return row;
  });
  res.status(200).send(body);
};

const getTaskByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const taskName = req.body.task_name;

    if (!taskName) {
      res.status(400).json({ error: 'Task name is required' });
      return;
    }

    const result = await query('SELECT * FROM task WHERE task_name = $1', [taskName]);

    if (result.rowCount === 0) {
      res.status(404).json({ error: 'Task not found' });
      return;
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch task',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

const taskProgressCompleteChecker = (taskProgress: string): boolean => {
  return taskProgress.toUpperCase() === TaskProgressContants.COMPLETED;
};
const postTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { taskName, taskDescription, taskProgress, taskDueDate } = req.body;
    console.log('Received data:', { taskName, taskDescription, taskProgress, taskDueDate });
    const isTaskComplete = taskProgressCompleteChecker(taskProgress);
    let taskCompleted: Date | null = null;

    // if task complete, assign the date today.
    if (isTaskComplete) {
      taskCompleted = new Date();
    }

    const result = await addTaskData(
      taskName,
      taskDescription,
      taskProgress,
      taskDueDate,
      taskCompleted
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

export { getAllTask, getTaskByName, postTask };
