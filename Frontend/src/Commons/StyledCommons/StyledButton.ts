import styled from '@emotion/styled';
import isDarkMode from '../../Interface/General/isDarkMode';

interface StyledButtonProps extends isDarkMode {
  bgType?: string;
}
const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  padding: 5px;
  height: 35px;
  background-color: ${(props) => {
    if (props.bgType === 'transparent') {
      return 'transparent';
    } else {
      return props.isDarkMode ? '#264653' : '#e76f51';
    }
  }};
  color: ${(props) => {
    return props.isDarkMode ? '#f8f9fa' : '#fdf0d5';
  }};
  font-weight: 600;
  border: ${(props) => {
    if (props.bgType === 'transparent') {
      return 'none';
    } else {
      return '1px solid #ced4da';
    }
  }};
  text-decoration: ${(props) => {
    if (props.bgType === 'transparent') {
      return 'underline';
    } else {
      return 'none';
    }
  }};
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
