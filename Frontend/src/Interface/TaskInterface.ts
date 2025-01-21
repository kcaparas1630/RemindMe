export default interface TaskInterface {
    taskName: string;
    taskDescription: string;
    taskProgress: string;
    taskDueDate: string;
    taskCompleted?: Date;
}
