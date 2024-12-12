import { object, string } from 'yup';

const userRegisterValidationSchema = object({
  body: object({
    first_name: string().required('First name is required'),
    last_name: string().required('Last name is required'),
    username: string().required('Username is required'),
    // password complies to OWASP security
    user_password: string()
      .min(8)
      .max(64)
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:'",.<>\?])/,
        'Password must contain at least one Uppercase letter, one Lowercase letter, one Number, and one Special character'
      )
      .required('Password is required'),
    user_email: string().email('Email must be a valid email').required('Email is required'),
  }),
});

const userLoginValidationSchema = object({
  body: object({
    username: string().required('Username is required'),
    user_password: string().required('Password is required'),
  }),
});

export { userRegisterValidationSchema, userLoginValidationSchema };
