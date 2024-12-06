import { Request, Response } from 'express';
import TaskInterface from '../Interface/taskInterface';
import { addTaskData, query } from '../db';
import TaskProgressContants from '../Constants/TaskProgress';

const getAllTask = async (req: Request, res: Response): Promise<void> => {
    const task = await query('Select * from task');
    const body = task.rows.map((row: any) => row);
    res.status(200).send(body);
};

const getTaskByName = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const task_name = req.body.task_name;
  
      if (!task_name) {
        res.status(400).json({ error: "Task name is required" });
        return;
      }
  
      const result = await query(
        "SELECT * FROM task WHERE task_name = $1",
        [task_name]
      );
  
      if (result.rowCount === 0) {
        res.status(404).json({ error: "Task not found" });
        return;
      }
  
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({
        error: "Failed to fetch task",
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  };
  
const taskProgressCompleteChecker = (taskProgress: string): boolean => {
    return taskProgress.toUpperCase() === TaskProgressContants.COMPLETED;
};

const postTask = async (req: Request, res: Response): Promise<void> => {
    try {
        const { task_name, task_description, task_progress, task_due_date } = req.body;
        console.log('Received data:', { task_name, task_description, task_progress, task_due_date });
        const isTaskComplete = taskProgressCompleteChecker(task_progress);
        let task_completed: Date | null = null;

        // if task complete, assign the date today.
        if ( isTaskComplete ) {
            task_completed = new Date();
        }

        const result = await addTaskData(
            task_name,
            task_description,
            task_progress,
            task_due_date,
            task_completed
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
