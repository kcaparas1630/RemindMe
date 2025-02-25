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
  Container,
  FormHolderContainer,
  RouterText,
  NavigationText,
  FormHeader1,
  BannerHeader,
  BannerText,
} from '../Styled-Components/StyledAuth';
import {
  FormContainer,
  ErrorMessage,
  InputWrapper,
  StyledForm,
  InputRow,
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


  return (
    <>
      <Container>
        <ThemeProvider theme={{ isDarkMode: isDarkMode }}>
          <FormHolderContainer>
            <FormContainer isDarkMode={isDarkMode}>
              <FormHeader1>Create your Account</FormHeader1>
              <NavigationText>
                Already have an account?&nbsp;<RouterText to="/login">Sign in</RouterText>
              </NavigationText>

              <FormProvider {...methods}>
                <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
                  <InputRow>
                    <InputWrapper>
                      <InputField
                        isDarkMode={isDarkMode}
                        registerName="firstName"
                        type="text"
                        inputName="firstName"
                        labelName="First Name"
                        placeholder="First Name"
                        error={methods.formState.errors.firstName}
                      />
                      {methods.formState.errors.firstName && (
                        <ErrorMessage>{methods.formState.errors.firstName?.message}</ErrorMessage>
                      )}
                    </InputWrapper>
                    <InputWrapper>
                      <InputField
                        isDarkMode={isDarkMode}
                        registerName="lastName"
                        type="text"
                        inputName="lastName"
                        labelName="Last Name"
                        placeholder="Last Name"
                        error={methods.formState.errors.lastName}
                      />
                      {methods.formState.errors.lastName && (
                        <ErrorMessage>{methods.formState.errors.lastName?.message}</ErrorMessage>
                      )}
                    </InputWrapper>
                  </InputRow>
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
                  <InputWrapper>
                    <InputField
                      isDarkMode={isDarkMode}
                      registerName="userEmail"
                      type="email"
                      inputName="userEmail"
                      labelName="Email"
                      placeholder="Email"
                      error={methods.formState.errors.userEmail}
                    />
                    {methods.formState.errors.userEmail && (
                      <ErrorMessage>{methods.formState.errors.userEmail?.message}</ErrorMessage>
                    )}
                  </InputWrapper>

                  <RouterText to="/login">Already have an account?</RouterText>
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
          <BannerContainer view="register">
            <BannerHeader>Welcome to RemindMe! Join now and get started!</BannerHeader>
            <BannerText>We got you covered! No more my dog eat my homework!</BannerText>
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
