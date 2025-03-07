export default interface TaskInterface {
    id: number;
    taskName: string;
    taskPriority: string;
    taskProgress: string;
    taskDueDate: Date;
    taskCompleted?: Date;
}
