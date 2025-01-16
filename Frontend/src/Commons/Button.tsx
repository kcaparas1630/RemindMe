import { FC } from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button<{ isDarkMode: boolean }>`
  width: 100%;
  padding: 5px;
  height: 35px;
  background-color: ${(props) => {
    return props.isDarkMode ? '#264653' : '#E9ECEF'
  }};
  color: ${(props) => {
    return props.isDarkMode ? '#f8f9fa' : '#212529'
  }};
  border: 1px solid #CED4DA;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => {
      return props.isDarkMode ? '#2A9D8F' : '#D3D3D3'
    }};
  }
`;

type ButtonType = 'button' | 'submit' | 'reset';
interface ButtonProps {
  name: string;
  type: ButtonType;
  onClick: () => void;
  isDarkMode: boolean;
}
const Button: FC<ButtonProps> = ({ name, type, onClick, isDarkMode }) => {
  return (
    <StyledButton
      isDarkMode={isDarkMode}
      id={name}
      value={name}
      type={type}
      onClick={onClick}
    >{name}</StyledButton>
  );
};

export default Button;
