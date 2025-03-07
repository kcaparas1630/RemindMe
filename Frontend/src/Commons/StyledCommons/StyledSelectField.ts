import styled from '@emotion/styled';
import isDarkMode from '../../Interface/General/isDarkMode';

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const StyledSelect = styled.select<isDarkMode>`
  width: 100%;
  font-size: 1rem;
  outline: none;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 1rem;
  color: gray;
 background-color: ${(props) => {
    return props.isDarkMode ? '#212529' : '#F8F9FA';
  }};
  transition: 0.1s ease-out;

  &:focus {
    border-color: ${(props) => {
      return props.isDarkMode ? '#DEE2E6' : '#212529';
    }};
  }

  &:focus + label {
    top: 0;
    background-color: ${(props) => {
      return props.isDarkMode ? '#212529' : '#F8F9FA';
    }};
    color: ${(props) => {
      return props.isDarkMode ? '#DEE2E6' : '#212529';
    }};
    transform: translateY(-50%) scale(0.9);
  }

  &:not([value=""]) + label {
    top: 0;
    background-color: ${(props) => {
      return props.isDarkMode ? '#212529' : '#F8F9FA';
    }};
    transform: translateY(-50%) scale(0.9);
  }
`;

const FloatingLabel = styled.label`
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  color: gray;
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
`;

export { InputWrapper, StyledSelect, FloatingLabel };
