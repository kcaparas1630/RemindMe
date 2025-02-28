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
import {
  Container,
  RouterText,
  BannerContainer,
  FormHolderContainer,
  NavigationText,
  FormHeader1,
} from '../Styled-Components/StyledAuth';
import {
  FormContainer,
  StyledForm,
  InputWrapper,
  ErrorMessage,
} from '../../Styled-Components/StyledForms';
import InputField from '../../../Commons/InputFields';
import Button from '../../../Commons/Button';
import LoginFormProps from '../../../Interface/Login/LoginFormProps';
import GeneralProps from '../../../Interface/General/GeneralProps';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import ApiErrorResponse from '../../../Interface/ErrorResponse';
import Carousel from './Carousel';

const loginUser = async (credentials: LoginFormProps) => {
  const result = await axios.post('http://localhost:3000/api/user/login', {
    userName: credentials.userName,
    userPassword: credentials.userPassword,
  });
  return result.data;
};

const Login: FC<GeneralProps> = ({ isDarkMode }) => {

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
      window.location.href = '/main/dashboard';
    },
    onError: (error: Error & { response?: { data: ApiErrorResponse } }) => {
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

  const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    mutation.mutate(data);
  };


  return (
    <>
      <Container>
        <ThemeProvider theme={{ isDarkMode: isDarkMode }}>
          <BannerContainer view="login">
            <Carousel />
          </BannerContainer>
          <FormHolderContainer>
            <FormContainer isDarkMode={isDarkMode}>
              <FormHeader1>Welcome Back!</FormHeader1>
              <NavigationText>
                Don't have an account?&nbsp;<RouterText to="/register">Sign up</RouterText>
              </NavigationText>
              <FormProvider {...methods}>
                <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
                  <InputWrapper>
                    <InputField
                      isDarkMode={isDarkMode}
                      registerName="userName"
                      type="text"
                      inputName="userName"
                      labelName="Username"
                      placeholder="Username"
                      error={methods.formState.errors.userName}
                    />
                    {methods.formState.errors.userName && (
                      <ErrorMessage>{methods.formState.errors.userName?.message}</ErrorMessage>
                    )}
                  </InputWrapper>
                  <InputWrapper>
                    <InputField
                      isDarkMode={isDarkMode}
                      registerName="userPassword"
                      type="password"
                      inputName="userPassword"
                      labelName="Password"
                      placeholder="Password"
                      error={methods.formState.errors.userPassword}
                    />
                    {methods.formState.errors.userPassword && (
                      <ErrorMessage>{methods.formState.errors.userPassword?.message}</ErrorMessage>
                    )}
                  </InputWrapper>
                  <RouterText to="/register">Forgot your Password?</RouterText>
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
          </FormHolderContainer>
        </ThemeProvider>
      </Container>
    </>
  );
};

export default Login;
