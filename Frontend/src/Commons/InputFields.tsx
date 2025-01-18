import React, { FC } from "react";
import { InputContainer, StyledInput, StyledLabel } from "./StyledCommons/StyledInput";

type InputFieldType = 'text' | 'password' | 'email';

interface InputFieldProps {
  inputName: string;
  placeholder: string;
  type: InputFieldType;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = (props) => {
  const { inputName } = props;
  return (
    <InputContainer>
      <StyledLabel htmlFor={inputName}>{inputName}</StyledLabel>
      <StyledInput {...props} />
    </InputContainer>
  );
};

export default InputField;
