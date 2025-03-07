import { FieldError } from "react-hook-form";
import isDarkMode from "./General/isDarkMode";
interface DatePickerProps extends isDarkMode {
    inputName: string;
    labelName: string;
    error?: FieldError | undefined;
}

export default DatePickerProps;
