/**
 * @params isDarkMode - theme referring to dark or light mode.
 * @params toggleTheme - function that handles the changing of theme.
 *
 * @returns a ReactNode, renders an html element.
 *
 * @author @Kcaparas
 */
import { FC, useState } from 'react';
import validationSchema from '../Schema/RegisterSchema';
import { ThemeProvider } from '@emotion/react';
import {
  BannerContainer,
  BannerTextContainer,
  BannerTitle,
  BannerImage,
  Container,
  FormHolderContainer,
  RouterText,
  BannerText,
  ButtonContainer,
} from '../Styled-Components/StyledAuth';
import {
  FormContainer,
  ErrorMessage,
  InputWrapper,
  StyledForm,
} from '../../Styled-Components/StyledForms';
import InputField from '../../../Commons/InputFields';
import Button from '../../../Commons/Button';
import RegisterFormProps from '../../../Interface/RegisterFormProps';
import Modal from '../../../Commons/Modal';
import { useNavigate } from 'react-router-dom';
import GeneralProps from '../../../Interface/General/GeneralProps';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';
import ApiErrorResponse from '../../../Interface/ErrorResponse';
import CoffeGuy from '../../../../assets/coffee holding.svg';

const registerUser = async (credentials: RegisterFormProps) => {
  const response = await axios.post('http://localhost:3000/api/user/register', {
    firstName: credentials.firstName,
    lastName: credentials.lastName,
    userName: credentials.userName,
    userPassword: credentials.userPassword,
    userEmail: credentials.userEmail,
  });

  return response.data;
};
const Register: FC<GeneralProps> = ({ isDarkMode }) => {
  const formData: RegisterFormProps = {
    firstName: '',
    lastName: '',
    userName: '',
    userPassword: '',
    userEmail: '',
  };
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<RegisterFormProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: formData,
  });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: async () => {
      setIsModalOpen(true);
      setIsLoading(true);
      await new Promise((resolve) => {
        setTimeout(resolve, 3000);
      });
      setIsModalOpen(false);
      setIsLoading(false);
      navigate('/login');
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

  const onSubmit: SubmitHandler<RegisterFormProps> = (data) => {
    mutation.mutate(data);
  };

  const handleSignInClick = async () => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1800);
    });
    navigate('/login');
  };

  return (
    <>
      <Container>
        <FormHolderContainer>
          <FormContainer isDarkMode={isDarkMode}>
            <h1>Task Dashboard Register</h1>
            <FormProvider {...methods}>
              <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
                <InputWrapper>
                  <InputField
                    registerName="firstName"
                    type="text"
                    inputName="firstName"
                    labelName="First Name"
                    placeholder="Enter your First Name"
                    error={methods.formState.errors.firstName}
                  />
                  {methods.formState.errors.firstName && (
                    <ErrorMessage>{methods.formState.errors.firstName?.message}</ErrorMessage>
                  )}
                </InputWrapper>
                <InputWrapper>
                  <InputField
                    registerName="lastName"
                    type="text"
                    inputName="lastName"
                    labelName="Last Name"
                    placeholder="Enter your Last Name"
                    error={methods.formState.errors.lastName}
                  />
                  {methods.formState.errors.lastName && (
                    <ErrorMessage>{methods.formState.errors.lastName?.message}</ErrorMessage>
                  )}
                </InputWrapper>
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
                <InputWrapper>
                  <InputField
                    registerName="userEmail"
                    type="email"
                    inputName="userEmail"
                    labelName="Email"
                    placeholder="Enter your email"
                    error={methods.formState.errors.userEmail}
                  />
                  {methods.formState.errors.userEmail && (
                    <ErrorMessage>{methods.formState.errors.userEmail?.message}</ErrorMessage>
                  )}
                </InputWrapper>
                <ThemeProvider theme={{ isDarkMode: isDarkMode }}>
                  <RouterText to="/login">Already have an account?</RouterText>
                </ThemeProvider>
                <Button
                  type="submit"
                  name="Submit"
                  disabled={methods.formState.isSubmitting}
                  isDarkMode={isDarkMode}
                >
                  {methods.formState.isSubmitting ? 'Loading...' : 'Register'}
                </Button>
                {methods.formState.errors.root && (
                  <ErrorMessage>{methods.formState.errors.root?.message}</ErrorMessage>
                )}
              </StyledForm>
            </FormProvider>
          </FormContainer>
        </FormHolderContainer>
        <ThemeProvider theme={{ isDarkMode: isDarkMode }}>
          <BannerContainer view="register">
            <BannerTextContainer>
              <BannerTitle>We got you covered! No more my dog eat my homework!</BannerTitle>
              <BannerImage
                view="register"
                src={CoffeGuy}
                alt="Coffee Guy"
              />
              <BannerText>Already have an account?</BannerText>
              <ButtonContainer>
                <Button
                  type="button"
                  name="Login"
                  disabled={false}
                  isDarkMode={isDarkMode}
                  handleClick={handleSignInClick}
                >
                  Sign In
                </Button>
              </ButtonContainer>
            </BannerTextContainer>
          </BannerContainer>
        </ThemeProvider>
      </Container>
      <Modal
        isOpen={isModalOpen}
        message={`${methods.getValues(
          'firstName'
        )}, your registration is successful! Please login with your credentials.`}
        isDarkMode={isDarkMode}
        isLoading={isLoading}
      />
    </>
  );
};

export default Register;
