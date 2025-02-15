interface TaskFormProps {
    taskName: string;
    taskDescription: string;
    taskProgress: 'NOTSTARTED' | 'STARTED' | 'COMPLETED';
    taskDueDate: Date;
}


export default TaskFormProps;
