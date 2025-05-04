import styled from '@emotion/styled';
import isDarkMode from '../../Interface/General/isDarkMode';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const PageButton = styled.button<isDarkMode & { isActive?: boolean }>`
  padding: 8px 12px;
  border: 1px solid ${props => {
    return props.isDarkMode ? '#495057' : '#ced4da';
  }};
  border-radius: 4px;
  background-color: ${props => {
    if (props.isActive) {
      return props.isDarkMode ? '#2A9D8F' : '#e76f51';
    }
    return props.isDarkMode ? '#343a40' : '#ffffff';
  }};
  color: ${props => {
    if (props.isActive) {
      return '#ffffff';
    }
    return props.isDarkMode ? '#f8f9fa' : '#212529';
  }};
  font-weight: ${props => {
    return props.isActive ? '600' : '400';
  }};
  cursor: pointer;
  
  &:hover {
    background-color: ${props => {
      return props.isDarkMode ? '#2A9D8F' : '#e76f51';
    }};
    color: #ffffff;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background-color: ${props => {
      return props.isDarkMode ? '#495057' : '#e9ecef';
    }};
    color: ${props => {
      return props.isDarkMode ? '#adb5bd' : '#6c757d';
    }};
  }
`;

export { PaginationContainer, PageButton }; 
