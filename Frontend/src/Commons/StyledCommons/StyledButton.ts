import styled from '@emotion/styled';
import isDarkMode from '../../Interface/General/isDarkMode';

const StyledButton = styled.button<isDarkMode>`
  width: 100%;
  padding: 5px;
  height: 35px;
  background-color: ${(props) => {
    return props.isDarkMode ? '#264653' : '#e76f51';
  }};
  color: ${(props) => {
    return props.isDarkMode ? '#f8f9fa' : '#fdf0d5';
  }};
  font-weight: 600;
  border: 1px solid #ced4da;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => {
      return props.isDarkMode ? '#2A9D8F' : '#D3D3D3';
    }};
  }
`;

export default StyledButton;
