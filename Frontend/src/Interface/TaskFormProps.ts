interface TaskFormProps {
    taskName: string;
    taskDescription: string;
    taskProgress: 'NOTSTARTED' | 'STARTED' | 'COMPLETED';
    taskDueDate: string;
}


export default TaskFormProps;
