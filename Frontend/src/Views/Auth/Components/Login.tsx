/**
 * @params isDarkMode - changing between dark or light mode
 *         toggleTheme - function to change between dark or light mode
 * @returns A ReactNode, renders an HTML element
 * @author @Kcaparas
 */

import { FC, useState } from 'react';
import axios from 'axios';
import { Formik, FormikErrors } from 'formik';
import validationSchema from '../Schema/LoginSchema';
import { ThemeProvider } from '@emotion/react';
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

const Login: FC<GeneralProps> = ({ isDarkMode, toggleTheme }) => {
  const methods = useForm<LoginFormProps>();

  const onSubmit: SubmitHandler<LoginFormProps> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };
  /**
   *
   * @param values - gets the values from input fields under formik.
   * @param setSubmitting - a state that returns to true when the user has clicked the submit button/ handleLogin function was called and validation suceeded
   * @param setErrors - a state that stores the errors and then displays unto the rendered ErrorMessage. Refer to line 113 and other <ErrorMessage /> calls
   *
   * @author @Kcaparas
   */
  // const handleLogin = async (
  //   values: LoginFormProps,

  //   {
  //     setSubmitting,
  //     setErrors,
  //   }: // eslint-disable-next-line no-unused-vars
  //   { setSubmitting: (isSubmitting: boolean) => void; setErrors: (errors: FormikErrors<LoginFormProps>) => void }
  // ): Promise<void> => {
  //   try {
  //     setErrors({});
  //     setSubmitting(true);

  //     const result = await axios.post('http://localhost:3000/api/user/login', {
  //       userName: values.userName,
  //       userPassword: values.userPassword,
  //     });

  //     localStorage.setItem('loginToken', result.data.token);
  //     // force a page reload to update authentication state
  //     window.location.href = '/dashboard';
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       const serverError = error.response?.data?.message;
  //       setErrors(serverError || 'Login failed');

  //       if (error.response?.data?.errors) {
  //         setErrors(error.response.data.errors);
  //       }
  //     } else {
  //       // requires an object from LoginProps to work. Either field will work.
  //       setErrors({ userName: 'An unexpected error occurred' });
  //     }
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

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
                {methods.formState.errors.userName && <ErrorMessage>Show something</ErrorMessage>}
              </InputWrapper>
              <Button
                    type="submit"
                    name="Submit"
                    disabled={false}
                    isDarkMode={isDarkMode}
                  >
                    Submit
                  </Button>
            </StyledForm>
          </FormProvider>

          {/* <Formik
            initialValues={formData}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, setErrors }) => {
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
                  <ThemeProvider theme={{ isDarkMode: isDarkMode }}>
                    <RouterText to="/register">No Account yet?</RouterText>
                  </ThemeProvider>
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
          </Formik> */}
        </FormContainer>
      </Container>
    </>
  );
};

export default Login;
