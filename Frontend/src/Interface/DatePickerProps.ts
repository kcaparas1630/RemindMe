import { FieldError } from "react-hook-form";
interface DatePickerProps {
    inputName: string;
    labelName: string;
    error?: FieldError | undefined;
}

export default DatePickerProps;
