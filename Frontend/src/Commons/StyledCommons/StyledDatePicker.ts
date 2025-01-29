import styled from '@emotion/styled';


const DatePickerWrapper = styled.div`
  .react-datepicker-wrapper {
    width: 90%;
  }
  .react-datepicker-popper {
    z-index: 9999;
  }
  input {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding-left: 30px !important;
  }
  .react-datepicker__calendar-icon {
    padding: 0.5rem;
    margin-left: -2px;
  }
`;

export default DatePickerWrapper;
