import { FC } from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  width: 100%;
  height: 35px;
  background-color: #264653;
  color: #f8f9fa;
  border: 0;
  border-radius: 4px;
`;

type ButtonType = 'button' | 'submit' | 'reset';
interface ButtonProps {
  name: string;
  type: ButtonType;
  onClick: () => void;
}
const Button: FC<ButtonProps> = ({ name, type, onClick }) => {
  return (
    <StyledButton
      id={name}
      value={name}
      type={type}
      onClick={onClick}
    >{name}</StyledButton>
  );
};

export default Button;
