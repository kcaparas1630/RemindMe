/**
 * @params props - a group consisting of attributes in the InputFieldProps
 * @returns A ReactNode, rendered as an HTML element
 * @author @Kcaparas
 */

import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import SelectFieldProps from '../Interface/SelectFieldProps';
import { StyledSelect, InputContainer, StyledLabel } from './StyledCommons/StyledSelectField';

const SelectField: FC<SelectFieldProps> = ({inputName, labelName, registerName, options, ...props}) => {
  const { register } = useFormContext();
  return (
    <InputContainer>
      <StyledLabel htmlFor={inputName}>{labelName}:</StyledLabel>
      <StyledSelect
        id={inputName}
        {...register(registerName)}
        {...props}
      >
        <option
          value=""
          defaultValue='true'
        >
          Select an Option  
        </option>
        {options.map((optionItem) => {
          return (
            <option key={optionItem.value} value={optionItem.value}>{optionItem.label}</option>
          )
        })}
      </StyledSelect>
    </InputContainer>
  );
};

export default SelectField;
