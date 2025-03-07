import styled from '@emotion/styled';

const DatePickerWrapper = styled.div<{ isDarkMode: boolean }>`
  position: relative;
  width: 100%;

  .react-datepicker-wrapper {
    width: 85%;
  }
  
  .react-datepicker-popper {
    z-index: 9999;
  }
  
  input {
    width: 100%;
    height: 53px;
    font-size: 1rem;
    outline: none;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 2rem 0;
    padding-left: 3rem !important;
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

    &:not(:placeholder-shown) + label {
      top: 0;
      background-color: ${(props) => {
        return props.isDarkMode ? '#212529' : '#F8F9FA';
      }};
      transform: translateY(-50%) scale(0.9);
    }
  }

  .react-datepicker__calendar-icon {
    padding: 0.5rem;
    margin-top: 0.8rem;
    width: 1.5em;
    height: 1.5em;
  }
`;

const FloatingLabel = styled.label<{ isDarkMode: boolean }>`
  position: absolute;
  font-size: 1rem;
  left: 0;
  top: 0;
  transform: translateY(-50%);
  color: gray;
  background-color: ${(props) => {
        return props.isDarkMode ? '#212529' : '#F8F9FA';
      }};
  padding: 0 0.3rem;
  margin: 0 0.5rem;
  transition: 0.1s ease-out;
  transform-origin: left top;
  pointer-events: none;
  z-index: 3;
`;

export { DatePickerWrapper, FloatingLabel };
