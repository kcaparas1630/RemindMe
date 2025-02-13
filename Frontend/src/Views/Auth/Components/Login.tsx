/**
 * @params isDarkMode - changing between dark or light mode
 *         toggleTheme - function to change between dark or light mode
 * @returns A ReactNode, renders an HTML element
 * @author @Kcaparas
 */

import { FC } from 'react';
import axios from 'axios';
import validationSchema from '../Schema/LoginSchema';
import { ThemeProvider } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Container, RouterText } from '../Styled-Components/StyledAuth';
import {
  FormContainer,
  StyledForm,
  InputWrapper,
  ErrorMessage,
} from '../../Styled-Components/StyledForms';
import InputField from '../../../Commons/InputFields';
import Button from '../../../Commons/Button';
import Header from '../../../Commons/Headers';
import LoginFormProps from '../../../Interface/Login/LoginFormProps';
import GeneralProps from '../../../Interface/General/GeneralProps';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import ApiErrorResponse from '../../../Interface/ErrorResponse';

const loginUser = async (credentials: LoginFormProps) => {
  const result = await axios.post('http://localhost:3000/api/user/login', {
    userName: credentials.userName,
    userPassword: credentials.userPassword,
  });
  return result.data;
};

const Login: FC<GeneralProps> = ({ isDarkMode, toggleTheme }) => {
  const formData: LoginFormProps = { userName: '', userPassword: '' };
  const methods = useForm<LoginFormProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: formData,
  });
  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      localStorage.setItem('loginToken', data.token);
      // force a page reload to update authentication state
      window.location.href = '/dashboard';
    },
    onError: (error: Error & {response?: { data: ApiErrorResponse}}) => {
      if (axios.isAxiosError(error) && error.response?.data) {
        methods.setError('root', {
          message: error.response.data.message,
        });
      } else {
        // Fallback for other types of errors
        methods.setError('root', {
          message: 'An unexpected error occurred',
        });
      }
    },
  });
  // Will update in the next PR
  const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    mutation.mutate(data);
  };

  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <Container>
        <FormContainer isDarkMode={isDarkMode}>
          <h1>Task Dashboard Login</h1>
          <FormProvider {...methods}>
            <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
              <InputWrapper>
                <InputField
                  registerName="userName"
                  type="text"
                  inputName="userName"
                  labelName="Username"
                  placeholder="Enter your Username"
                  error={methods.formState.errors.userName}
                />
                {methods.formState.errors.userName && (
                  <ErrorMessage>{methods.formState.errors.userName?.message}</ErrorMessage>
                )}
              </InputWrapper>
              <InputWrapper>
                <InputField
                  registerName="userPassword"
                  type="password"
                  inputName="userPassword"
                  labelName="Password"
                  placeholder="Enter your Password"
                  error={methods.formState.errors.userPassword}
                />
                {methods.formState.errors.userPassword && (
                  <ErrorMessage>{methods.formState.errors.userPassword?.message}</ErrorMessage>
                )}
              </InputWrapper>
              <ThemeProvider theme={{ isDarkMode: isDarkMode }}>
                <RouterText to="/register">No Account yet?</RouterText>
              </ThemeProvider>
              <Button
                type="submit"
                name="Submit"
                disabled={methods.formState.isSubmitting}
                isDarkMode={isDarkMode}
              >
                {methods.formState.isSubmitting ? 'Loading...' : 'Submit'}
              </Button>
              {methods.formState.errors.root && (
                  <ErrorMessage>{methods.formState.errors.root?.message}</ErrorMessage>
                )}
            </StyledForm>
          </FormProvider>
        </FormContainer>
      </Container>
    </>
  );
};

export default Login;
