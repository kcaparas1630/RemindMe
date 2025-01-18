import React, { FC } from "react";
import { InputContainer, StyledInput, StyledLabel } from "./StyledCommons/StyledInput";

// Assuming this is in the InputField component file
interface InputFieldProps {
  type: string;
  inputName: string;
  labelName: string;
  placeholder: string;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean | undefined | string;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const InputField: FC<InputFieldProps> = (props) => {
  const { inputName, labelName } = props;
  return (
    <InputContainer>
      <StyledLabel htmlFor={inputName}>{labelName}:</StyledLabel>
      <StyledInput id={inputName} name={inputName} {...props} />
    </InputContainer>
  );
};

export default InputField;
