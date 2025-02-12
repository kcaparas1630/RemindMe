/**
 * @params props - a group consisting of attributes in the InputFieldProps
 * @returns A ReactNode, rendered as an HTML element
 * @author @Kcaparas
 */
import { FC } from "react";
import TextAreaProps from "../Interface/TextAreaProps";
import { useFormContext } from "react-hook-form";
import { StyledTextArea, InputContainer, StyledLabel } from "./StyledCommons/StyledTextField";


const TextArea: FC<TextAreaProps> = ({ inputName, labelName, registerName, ...props }) => {
  const { register } = useFormContext();
  return (
    <InputContainer>
      <StyledLabel htmlFor={inputName}>{labelName}:</StyledLabel>
      <StyledTextArea id={inputName} 
      {...register(registerName)}
      {...props} />
    </InputContainer>
  );
};

export default TextArea;
