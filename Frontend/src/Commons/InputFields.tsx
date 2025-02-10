/**
 * @params props - a group consisting of attributes in the InputFieldProps
 * @returns A ReactNode, rendered as an HTML element
 * @author @Kcaparas
 */
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { InputContainer, StyledInput, StyledLabel } from "./StyledCommons/StyledInput";
import InputFieldProps from "../Interface/InputFieldsProps";

const InputField: FC<InputFieldProps> = ({ inputName, labelName, registerName, ...props }) => {
  const { register } = useFormContext();

  return (
    <InputContainer>
      <StyledLabel htmlFor={inputName}>{labelName}:</StyledLabel>
      <StyledInput 
        id={inputName}  
        {...register(registerName)}
        {...props} 
      />
    </InputContainer>
  );
};


export default InputField;
