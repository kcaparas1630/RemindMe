interface TaskFormProps {
    taskName: string;
    taskProgress: 'NOTSTARTED' | 'STARTED' | 'COMPLETED';
    taskDueDate: Date;
    taskPriority: 'LOW' | 'MEDIUM' | 'HIGH';
}


export default TaskFormProps;
