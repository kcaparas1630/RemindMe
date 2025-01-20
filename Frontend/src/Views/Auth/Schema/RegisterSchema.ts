import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    userName: Yup.string().required('Username is required'),
    // password complies to OWASP security
    userPassword: Yup.string()
      .min(8)
      .max(64)
      .matches(
        // eslint-disable-next-line no-useless-escape
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:'",.<>\?])/,
        'Password must contain at least one Uppercase letter, one Lowercase letter, one Number, and one Special character'
      )
      .required('Password is required'),
      userEmail: Yup.string().email('Email must be a valid email').required('Email is required'),
});

export default validationSchema;
