import styled from '@emotion/styled';
import isDarkMode from '../../Interface/General/isDarkMode';

const FormContainer = styled.div<isDarkMode>`
  label: LoginFormContainer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  width: 90%;
  max-width: 300px;
  color: ${(props) => {
    return props.isDarkMode ? '#DEE2E6' : '#212529';
  }};
  border-radius: 8px;
  @media (min-width: 768px) {
    padding: 24px 30px;
    gap: 24px;
    max-width: 400px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 0.8rem;
  margin-top: 0.25rem;
`;
const InputWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 24px;
  flex-direction: column;
  width: 100%;
`;

const InputRow = styled.div`  
  display: flex;
  gap: 24px;
  flex-direction: row;
  width: 100%;
`;



export { InputWrapper, ErrorMessage, StyledForm, FormContainer, InputRow }
