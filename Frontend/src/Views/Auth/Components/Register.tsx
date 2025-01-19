import { FC, useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import validationSchema from '../Schema/RegisterSchema';
import {
  Container,
  LoginFormContainer,
  ErrorMessage,
  InputWrapper,
  StyledForm,
} from '../Styled-Components/StyledAuth';
import InputField from '../../../Commons/InputFields';
import Button from '../../../Commons/Button';
import Header from '../../../Commons/Headers';
import RegisterFormProps from '../../../Interface/RegisterFormProps';

interface RegisterProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Register: FC<RegisterProps> = ({ isDarkMode, toggleTheme }) => {
  const [formData] = useState<RegisterFormProps>({
    firstName: '',
    lastName: '',
    userName: '',
    userPassword: '',
    userEmail: '',
  });
  const [, setError] = useState<string | null>(null);

  const handleRegister = async (
    values: RegisterFormProps,

    {
      setSubmitting,
      setErrors,
    }: // eslint-disable-next-line no-unused-vars
    { setSubmitting: (isSubmitting: boolean) => void; setErrors: (errors: object) => void }
  ): Promise<void> => {
    try {
      setError(null);
      setSubmitting(true);

      await axios.post('http://localhost:3000/user/register', {
        firstName: values.firstName,
        lastName: values.lastName,
        userName: values.userName,
        userPassword: values.userPassword,
        userEmail: values.userEmail,
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverError = error.response?.data?.message;
        setError(serverError || 'Login failed');

        if (error.response?.data?.errors) {
          setErrors(error.response.data.errors);
        }
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Header
        themeMode={isDarkMode ? 'dark' : 'light'}
        toggleTheme={toggleTheme}
      />
      <Container>
        <LoginFormContainer isDarkMode={isDarkMode}>
          <h1>Task Dashboard Register</h1>
          <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, setErrors }) => {
              handleRegister(values, { setSubmitting, setErrors });
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => {
              return (
                <StyledForm onSubmit={handleSubmit}>
                  <InputWrapper>
                    <InputField
                      type="text"
                      inputName="firstName"
                      labelName="Firstname"
                      placeholder="Enter your First name"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.firstName && touched.firstName}
                    />
                    {errors.firstName && touched.firstName && (
                      <ErrorMessage>{errors.firstName}</ErrorMessage>
                    )}
                  </InputWrapper>
                  <InputWrapper>
                    <InputField
                      type="text"
                      inputName="lastName"
                      labelName="Lastname"
                      placeholder="Enter your Last name"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.lastName && touched.lastName}
                    />
                    {errors.lastName && touched.lastName && (
                      <ErrorMessage>{errors.lastName}</ErrorMessage>
                    )}
                  </InputWrapper>
                  <InputWrapper>
                    <InputField
                      type="text"
                      inputName="userName"
                      labelName="Username"
                      placeholder="Enter your Username"
                      value={values.userName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.userName && touched.userName}
                    />
                    {errors.userName && touched.userName && (
                      <ErrorMessage>{errors.userName}</ErrorMessage>
                    )}
                  </InputWrapper>
                  <InputWrapper>
                    <InputField
                      type="password"
                      inputName="userPassword"
                      labelName="Password"
                      placeholder="Enter your Password"
                      value={values.userPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.userPassword && touched.userPassword}
                    />
                    {errors.userPassword && touched.userPassword && (
                      <ErrorMessage>{errors.userPassword}</ErrorMessage>
                    )}
                  </InputWrapper>
                  <InputWrapper>
                    <InputField
                      type="email"
                      inputName="userEmail"
                      labelName="Email"
                      placeholder="Enter your Email"
                      value={values.userEmail}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.userEmail && touched.userEmail}
                    />
                    {errors.userEmail && touched.userEmail && (
                      <ErrorMessage>{errors.userEmail}</ErrorMessage>
                    )}
                  </InputWrapper>
                  <Button
                    type="submit"
                    name="Submit"
                    disabled={isSubmitting}
                    isDarkMode={isDarkMode}
                  >
                    {isSubmitting ? 'Registering...' : 'Submit'}
                  </Button>
                </StyledForm>
              );
            }}
          </Formik>
        </LoginFormContainer>
      </Container>
    </>
  );
};

export default Register;
