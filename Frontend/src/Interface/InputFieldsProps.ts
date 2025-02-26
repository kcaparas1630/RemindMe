import { FieldError } from "react-hook-form";
import isDarkMode from "./General/isDarkMode";

interface InputFieldProps extends isDarkMode {
    type: string;
    inputName: string;
    labelName: string;
    placeholder: string;
    registerName: string;
    error?: FieldError | undefined;
}

export default InputFieldProps;
