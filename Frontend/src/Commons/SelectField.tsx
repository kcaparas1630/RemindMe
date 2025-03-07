/**
 * @params props - a group consisting of attributes in the InputFieldProps
 * @returns A ReactNode, rendered as an HTML element
 * @author @Kcaparas
 */

import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import SelectFieldProps from '../Interface/SelectFieldProps';
import { StyledSelect, InputWrapper, FloatingLabel } from './StyledCommons/StyledSelectField';

const SelectField: FC<SelectFieldProps> = ({
  inputName, 
  labelName, 
  registerName, 
  options, 
  isDarkMode,
  ...props
}) => {
  const { register } = useFormContext();
  return (
    <InputWrapper>
      <StyledSelect
        id={inputName}
        isDarkMode={isDarkMode}
        {...register(registerName)}
        {...props}
      >
        <option value="" defaultValue="">Select an Option</option>
        {options.map((optionItem) => {
          return (
            <option key={optionItem.value} value={optionItem.value}>
              {optionItem.label}
            </option>
          )
        })}
      </StyledSelect>
      <FloatingLabel htmlFor={inputName}>{labelName}:</FloatingLabel>
    </InputWrapper>
  );
};

export default SelectField;
