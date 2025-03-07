import { FieldError } from 'react-hook-form';
import isDarkMode from './General/isDarkMode';

export interface OptionProps {
  value: string;
  label: string;
}

interface SelectFieldProps extends isDarkMode {
  options: OptionProps[];
  inputName: string;
  labelName: string;
  registerName: string;
  error?: FieldError | undefined;
}

export default SelectFieldProps;
