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
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<RegisterFormProps>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<RegisterFormProps> = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    setIsModalOpen(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsLoading(false);
      navigate('/login');
    }, 3000);
  };
  /**
   *
   * @param values - of interface RegisterFormProps, gets the values from the input fields under Formik
   * @param setSubmitting - returns to true when user has clicked the submit button/ validation succeeded and handleRegister is called.
   * @param errors - stores the error that the user made and displays it into one of the <ErrorMessages/>
   *
   * @author @Kcaparas
   */
  // const handleRegister = async (
  //   values: RegisterFormProps,

  //   {
  //     setSubmitting,
  //     setErrors,
  //   }:
  //   {
  //     // eslint-disable-next-line no-unused-vars
  //     setSubmitting: (isSubmitting: boolean) => void;
  //     // eslint-disable-next-line no-unused-vars
  //     setErrors: (errors: FormikErrors<RegisterFormProps>) => void;
  //   }
  // ): Promise<void> => {
  //   try {
  //     setErrors({});
  //     setSubmitting(true);
  //     setIsLoading(true);

  //     // only reason for this is because I need the formData state to render something in the Modal
  //     setFormData({
  //       firstName: values.firstName,
  //       lastName: values.lastName,
  //       userName: values.userName,
  //       userPassword: values.userPassword,
  //       userEmail: values.userEmail,
  //     });

  //     /*
  //       why not use the formData? Reason is that due to the nature of React, formData isn't updated yet, therefore, I will get undefined values
  //       when I do firstName: formData.firstName. Since React updates are asynchronous.
  //     */
  //     await axios.post('http://localhost:3000/api/user/register', {
  //       firstName: values.firstName,
  //       lastName: values.lastName,
  //       userName: values.userName,
  //       userPassword: values.userPassword,
  //       userEmail: values.userEmail,
  //     });

  //     setIsModalOpen(true);
  //     setTimeout(() => {
  //       setIsModalOpen(false);
  //       setIsLoading(false);
  //       navigate('/login');
  //     }, 3000);
  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       const serverError = error.response?.data?.message;
  //       setErrors(serverError || 'Login failed');

  //       if (error.response?.data?.errors) {
  //         setErrors(error.response.data.errors);
  //       }
  //     } else {
  //       // refer to Login.tsx, requires an object property from registerformprops to work. Either property works.
  //       setErrors({ userName: 'An unexpected error occurred' });
  //     }
  //     setIsLoading(false);
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
                  <ThemeProvider theme={{ isDarkMode: isDarkMode }}>
                    <RouterText to="/login">Already have an account?</RouterText>
                  </ThemeProvider>
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
          </Formik> */}
        </FormContainer>
      </Container>
      <Modal
        isOpen={isModalOpen}
        message={`${methods.getValues("firstName")}, your registration is successful! Please login with your credentials.`}
        isDarkMode={isDarkMode}
        isLoading={isLoading}
      />
    </>
  );
};

export default Register;
