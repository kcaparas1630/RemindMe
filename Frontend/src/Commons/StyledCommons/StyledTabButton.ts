import styled from '@emotion/styled';
import isDarkMode from '../../Interface/General/isDarkMode';

interface TabButtonProps extends isDarkMode {
    isActive: boolean;
    onClick: () => void;
}

const StyledTabButton = styled.button<TabButtonProps>`
  padding: 8px 30px;
  border: none;
  border-bottom: ${props => {
    return props.isActive ? '3px solid' : '1px solid';
  }};
  border-bottom-color: ${props => {
    if (props.isActive) {
      return props.isDarkMode ? '#2A9D8F' : '#e76f51';
    }
    return props.isDarkMode ? '#495057' : '#ced4da';
  }};
  background-color: transparent;
  color: ${props => {
    if (props.isActive) {
      return props.isDarkMode ? '#f8f9fa' : '#212529';
    }
    return props.isDarkMode ? '#adb5bd' : '#6c757d';
  }};
  font-weight: ${props => {
    return props.isActive ? '600' : '400';
  }};
  cursor: pointer;
  
  &:hover {
    color: ${props => {
      return props.isDarkMode ? '#f8f9fa' : '#212529';
    }};
    border-bottom-color: ${props => {
      return props.isDarkMode ? '#2A9D8F' : '#e76f51';
    }};
  }
  
`;

export default StyledTabButton;
