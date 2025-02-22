/**
 * @params isDarkMode - changing between dark or light mode
 *         toggleTheme - function to change between dark or light mode
 * @returns A ReactNode, renders an HTML element
 * @author @Kcaparas
 */

import { FC, useState } from 'react';
import axios from 'axios';
import validationSchema from '../Schema/LoginSchema';
import { ThemeProvider } from '@emotion/react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Container,
  RouterText,
  BannerContainer,
  FormHolderContainer,
  BannerImage,
  BannerTitle,
  BannerText,
  BannerTextContainer,
} from '../Styled-Components/StyledAuth';
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
import ManSittingDown from '../../../../assets/Man Sitting Down.svg';
import { useNavigate } from 'react-router-dom';

const loginUser = async (credentials: LoginFormProps) => { 
  const result = await axios.post('http://localhost:3000/api/user/login', {
    userName: credentials.userName,
    userPassword: credentials.userPassword,
  });
  return result.data;
};

const Login: FC<GeneralProps> = ({ isDarkMode, toggleTheme }) => {
  const navigate = useNavigate();
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
      window.location.href = '/main';
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
  const [isExiting, setIsExiting] = useState(false);

  const onSubmit: SubmitHandler<LoginFormProps> = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    mutation.mutate(data);
  };

  const handleSignUpClick = async () => {
    setIsExiting(true);
    // Wait for animation to complete before navigating
    await new Promise(resolve => {
      setTimeout(resolve, 2500);
    });
    navigate('/register');
  };

  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
        <Container>
          <ThemeProvider theme={{ isDarkMode: isDarkMode }}>
            <BannerContainer
              initial={{ scale: 1, opacity: 1 }}
              animate={isExiting && {
                width: '100vw',
                height: '100vh',
                zIndex: 100,
                borderRadius: 0,
                position: 'fixed',
                top: 0,
                left: 0,
              }}
              transition={{
                duration: 2.5,
                ease: [0.4, 0, 0.2, 1],
              }}
            >
            <BannerTextContainer>
              <BannerTitle>Welcome Back!</BannerTitle>
              <BannerImage src={ManSittingDown}  alt='Man Holding a Coffee'/>
              <BannerText>Catch up on your tasks!</BannerText>
              <BannerText>No Account yet?</BannerText>
              <Button
                  type="button"
                  name="Sign Up"
                  disabled={false}
                  isDarkMode={isDarkMode}
                  handleClick={handleSignUpClick}
                >Sign Up</Button>
            </BannerTextContainer>
          </BannerContainer>
        </ThemeProvider>
        <FormHolderContainer>
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
                  <RouterText to="/register">Forgot your Password?</RouterText>
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
        </FormHolderContainer>
      </Container>
    </>
  );
};

export default Login;
