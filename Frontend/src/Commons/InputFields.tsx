import { FC } from "react";
import { InputContainer, StyledInput, StyledLabel } from "./StyledCommons/StyledInput";

type InputFieldType = 'text' | 'password' | 'email';

interface InputFieldProps {
  inputName: string;
  placeholder: string;
  type: InputFieldType;
}

const InputField: FC<InputFieldProps> = ({ inputName, placeholder, type }) => {
  return (
    <InputContainer>
      <StyledLabel htmlFor={inputName}>{inputName}</StyledLabel>
      <StyledInput type={type} id={inputName} name={inputName} placeholder={placeholder} />
    </InputContainer>
  );
};

export default InputField;
