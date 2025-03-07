/**
 * @params props - a group consisting of attributes in the InputFieldProps
 * @returns A ReactNode, rendered as an HTML element
 * @author @Kcaparas
 */
import { FC } from 'react';
import { InputWrapper } from './StyledCommons/StyledInput';
import { DatePickerWrapper, FloatingLabel } from './StyledCommons/StyledDatePicker';
import DatePickerProps from '../Interface/DatePickerProps';
import { useFormContext, useController } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField: FC<DatePickerProps> = ({ inputName, labelName, isDarkMode }) => {
  const { control } = useFormContext();
  const {
    field: { value, onChange }
  } = useController({
    name: inputName,
    control,
    defaultValue: new Date()
  });

  return (
    <InputWrapper>
      <DatePickerWrapper isDarkMode={isDarkMode}>
        <DatePicker
          id={inputName}
          selected={value ? new Date(value) : new Date()}
          onChange={(date: Date | null) => {
            onChange(date?.toISOString());
          }}
          portalId="root"
          popperPlacement="bottom-start"
          showIcon
          placeholderText=" "
        />
        <FloatingLabel isDarkMode={isDarkMode} htmlFor={inputName}>{labelName}:</FloatingLabel>
      </DatePickerWrapper>
    </InputWrapper>
  );
};

export default DatePickerField;
