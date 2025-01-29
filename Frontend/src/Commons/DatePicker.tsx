/**
 * @params props - a group consisting of attributes in the InputFieldProps
 * @returns A ReactNode, rendered as an HTML element
 * @author @Kcaparas
 */
import { FC } from 'react';
import { InputContainer, StyledLabel } from './StyledCommons/StyledInput';
import DatePickerWrapper from './StyledCommons/StyledDatePicker';
import DatePickerProps from '../Interface/DatePickerProps';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useField, useFormikContext } from 'formik';

const DatePickerField: FC<DatePickerProps> = ({ inputName, labelName }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(inputName);

  return (
    <InputContainer>
      <StyledLabel htmlFor={inputName}>{labelName}:</StyledLabel>
      <DatePickerWrapper>
        <DatePicker
          id={inputName}
          selected={field.value ? new Date(field.value) : new Date()}
          onChange={(date: Date | null) => {
            setFieldValue(inputName, date?.toISOString());
          }}
          portalId="root"
          popperPlacement="bottom-start"
          showIcon
        />
      </DatePickerWrapper>
    </InputContainer>
  );
};

export default DatePickerField;
