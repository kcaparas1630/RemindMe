/**
 * @params props - a group consisting of attributes in the InputFieldProps
 * @returns A ReactNode, rendered as an HTML element
 * @author @Kcaparas
 */
import { FC } from "react";
import { InputContainer, StyledInput, StyledLabel } from "./StyledCommons/StyledInput";
import InputFieldProps from "../Interface/InputFieldsProps";

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
