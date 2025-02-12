import { FieldError } from "react-hook-form";
interface TextAreaProps {
    inputName: string;
    labelName: string;
    placeholder: string;
    registerName: string;
    error?: FieldError | undefined;
}

export default TextAreaProps;
