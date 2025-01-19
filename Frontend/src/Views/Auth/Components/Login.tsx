import { FC, useState } from 'react';
import axios from 'axios';
import { Formik } from 'formik';
import validationSchema from '../Schema/LoginSchema';
import {
  Container,
  LoginFormContainer,
  ErrorMessage,
  InputWrapper,
  StyledForm,
} from '../Styled-Components/StyledLogin';
import InputField from '../../../Commons/InputFields';
import Button from '../../../Commons/Button';
import Header from '../../../Commons/Headers';
import FormProps from '../../../Interface/FormProps';

interface LoginProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Login: FC<LoginProps> = ({ isDarkMode, toggleTheme }) => {
  const [formData] = useState<FormProps>({ userName: '', userPassword: '' });
  const [, setError] = useState<string | null>(null);

  const handleLogin = async (
    values: FormProps,

    {
      setSubmitting,
      setErrors,
      // eslint-disable-next-line no-unused-vars
    }: { setSubmitting: (isSubmitting: boolean) => void; setErrors: (errors: object) => void }
  ): Promise<void> => {
    try {
      setError(null);
      setSubmitting(true);
      console.log(values.userName, values.userPassword);
      const response = await axios.post('http://localhost:3000/user/login', {
        userName: values.userName,
        userPassword: values.userPassword,
      });

      console.log('Login successful', response);
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
          <h1>Task Dashboard Login</h1>
          <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, setErrors }) => {
              console.log('Form submitted'); // Ensure this log is printed
              handleLogin(values, { setSubmitting, setErrors });
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
                      inputName="userName"
                      labelName='Username'
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
                      labelName='Password'
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
                  <Button
                    type="submit"
                    name="Submit"
                    disabled={isSubmitting}
                    isDarkMode={isDarkMode}
                  >
                    {isSubmitting ? 'Logging in' : 'Submit'}
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

export default Login;
