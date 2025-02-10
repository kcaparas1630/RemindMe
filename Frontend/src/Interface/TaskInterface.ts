export default interface TaskInterface {
    id: number;
    taskName: string;
    taskDescription: string;
    taskProgress: string;
    taskDueDate: Date;
    taskCompleted?: Date;
}
