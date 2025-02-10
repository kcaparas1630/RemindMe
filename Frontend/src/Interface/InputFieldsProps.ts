import { FieldError } from "react-hook-form";

interface InputFieldProps {
    type: string;
    inputName: string;
    labelName: string;
    placeholder: string;
    registerName: string;
    error?: FieldError | undefined;
}

export default InputFieldProps;
