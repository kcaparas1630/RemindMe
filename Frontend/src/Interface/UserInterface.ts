import RegisterFormProps from "./RegisterFormProps";
import TaskInterface from "./TaskInterface";

export default interface UserInterface extends RegisterFormProps {
    id: number;
    createdAt: string;
    tasks: TaskInterface[];
}
