import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Username is required'),
    userPassword: Yup.string().required('Password is required')
});

export default validationSchema;
