/**
 * @params isDarkMode - theme referring to dark or light mode.
 * @params toggleTheme - function that handles the changing of theme.
 *
 * @returns a ReactNode, renders an html element.
 *
 * @author @Kcaparas
 */
import { FC, useState } from 'react';
// import axios from 'axios';
import validationSchema from '../Schema/RegisterSchema';
import { ThemeProvider } from '@emotion/react';
import { Container, RouterText } from '../Styled-Components/StyledAuth';
import {
  FormContainer,
  ErrorMessage,
  InputWrapper,
  StyledForm,
} from '../../Styled-Components/StyledForms';
import InputField from '../../../Commons/InputFields';
import Button from '../../../Commons/Button';
import Header from '../../../Commons/Headers';
import RegisterFormProps from '../../../Interface/RegisterFormProps';
import Modal from '../../../Commons/Modal';
import { useNavigate } from 'react-router-dom';
import GeneralProps from '../../../Interface/General/GeneralProps';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Register: FC<GeneralProps> = ({ isDarkMode, toggleTheme }) => {

  const formData: RegisterFormProps = ({
    firstName: '',
    lastName: '',
    userName: '',
    userPassword: '',
    userEmail: '',
  });
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<RegisterFormProps>({
    resolver: yupResolver(validationSchema),
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<RegisterFormProps> = async (data) => {
    setIsModalOpen(true);
    setIsLoading(true);
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    // eslint-disable-next-line no-console
    console.log(data);
    setIsModalOpen(false);
    setIsLoading(false);
    navigate('/login');
  };

  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <Container>
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
            </StyledForm>
          </FormProvider>
        </FormContainer>
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
