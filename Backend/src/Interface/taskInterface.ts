interface TaskInterface {
  task_name: string;
  task_description: string;
  task_progress: string;
  task_completion_date?: Date;
}

export default TaskInterface;
