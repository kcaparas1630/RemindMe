/**
 * @params props - a group consisting of attributes in the InputFieldProps
 * @returns A ReactNode, rendered as an HTML element
 * @author @Kcaparas
 */
import { FC } from "react";
import { useFormContext } from "react-hook-form";
import { InputWrapper, StyledInput, FloatingLabel } from "./StyledCommons/StyledInput";
import InputFieldProps from "../Interface/InputFieldsProps";

const InputField: FC<InputFieldProps> = ({ isDarkMode, inputName, placeholder, registerName, ...props }) => {
  const { register } = useFormContext();
  return (
    <InputWrapper>
      <StyledInput 
        id={inputName}  
        placeholder= ''
        isDarkMode={isDarkMode}
        {...register(registerName)}
        {...props} 
      />
      <FloatingLabel htmlFor={inputName}>{placeholder}:</FloatingLabel>
    </InputWrapper>
  );
};


export default InputField;
