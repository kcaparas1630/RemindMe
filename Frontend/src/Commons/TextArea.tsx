/**
 * @params props - a group consisting of attributes in the InputFieldProps
 * @returns A ReactNode, rendered as an HTML element
 * @author @Kcaparas
 */
import { FC } from "react";
import TextAreaProps from "../Interface/TextAreaProps";
import { StyledTextArea, InputContainer, StyledLabel } from "./StyledCommons/StyledTextField";


const TextArea: FC<TextAreaProps> = (props) => {
  const { inputName, labelName } = props;
  return (
    <InputContainer>
      <StyledLabel htmlFor={inputName}>{labelName}:</StyledLabel>
      <StyledTextArea id={inputName} name={inputName} {...props} />
    </InputContainer>
  );
};

export default TextArea;
