import styled from '@emotion/styled';
import { Form } from 'formik';
import { NavLink } from 'react-router-dom';

const Container = styled.section`
  label: ContainerWrapper;
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

const LoginFormContainer = styled.div<{ isDarkMode: boolean }>`
  label: LoginFormContainer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 16px;
  width: 90%;
  max-width: 400px;
  background-color: ${(props) => {
    return props.isDarkMode ? '#2C2F33' : '#E9ECEF';
  }};
  color: ${(props) => {
    return props.isDarkMode ? '#DEE2E6' : '#212529';
  }};
  border-radius: 8px;
  box-shadow: ${(props) => {
    return props.isDarkMode ? '0 4px 6px rgba(255, 255, 255, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.1)';
  }};

  @media (min-width: 768px) {
    padding: 24px 30px;
    gap: 24px;
  }
`;

const StyledForm = styled(Form)`
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

const RouterText = styled(NavLink)`
  font-size: 1rem;
  color: ${({ theme }) => {
    return theme.isDarkMode ? '#DEE2E6' : '#333333'
  }};
  text-align: right;
  padding: 0;
  margin: 0;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export { Container, LoginFormContainer, ErrorMessage, InputWrapper, StyledForm, RouterText };
