import { FieldError } from 'react-hook-form';

export interface OptionProps {
  value: string;
  label: string;
}

interface SelectFieldProps {
  options: OptionProps[];
  inputName: string;
  labelName: string;
  registerName: string;
  error?: FieldError | undefined;
}

export default SelectFieldProps;
