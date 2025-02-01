import { Request, Response } from 'express';
import { addTaskData, query } from '../db';
import TaskProgressContants from '../Constants/TaskProgress';

// get method by task
const getAllTask = async (req: Request, res: Response): Promise<void> => {
  const task = await query('Select * from task');
  const body = task.rows.map((row: object) => {
    return row;
  });
  res.status(200).send(body);
};

// get method but with params
const getTaskByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const taskName = req.body.task_name;

    if (!taskName) {
      res.status(400).json({ error: 'Task name is required' });
      return;
    }
    // queries from the postgresql database where $1 equals to the parameters that you've defined in the second argument.
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

const updateTaskCompletionHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const queryTask = `
      SELECT t."taskProgress"
      FROM task t
      JOIN taskAndUser tau ON t.id = tau."taskId"
      WHERE t.id = $1 AND tau."userId" = $2
    `;
    const { taskId } = req.params;
    const { userId } = req.body; 
    const taskResult = await query(queryTask, [taskId, userId]);
    const taskProgress = taskResult.rows[0].taskProgress;

    if (taskProgressCompleteChecker(taskProgress)) {
      const updateQuery = `
        UPDATE taskAndUser
        SET "taskCompleted" = CURRENT_DATE
        WHERE "taskId" = $1 AND "userId" = $2
        RETURNING *
      `;
      
      await query(updateQuery, [taskId, userId]);
    }

    res.status(200).json({
      success: true,
      message: 'Task Completed status updated sucessfully',
    });
  } catch (error) {
    console.error('Error updating task completion:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to update task completion status'
    });
  }
}

// post method for task 
const postTask = async (req: Request, res: Response) => {
  try {
    /**
     * Check for jwt token. return if none, else continue
     */
    const { taskName, taskDescription, taskProgress, taskDueDate } = req.body;
    console.log('Received data:', { taskName, taskDescription, taskProgress, taskDueDate });
    // const isTaskComplete = taskProgressCompleteChecker(taskProgress);
    // let taskCompleted: Date | null = null;
    // // if task complete, assign the date today.
    // if (isTaskComplete) {
    //   taskCompleted = new Date();
    // }
    const taskTodayDate: Date = new Date(Date.now());

    /**
     * Can also pass req.body, but for clarity, I've passed in the destructured elements.
     * For example,
     * `const result = await addTaskData(
     * ...req.body,
     * taskCompleted
     * );`
     * spreading req.body ensures that you're passing all existing properties. This is lesser code, but I'll just leave the destructured elements
     * for clarity.
     */
    const result = await addTaskData(
      taskName,
      taskDescription,
      taskProgress,
      taskTodayDate,
      taskDueDate,
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

export { getAllTask, getTaskByName, postTask, updateTaskCompletionHandler };
