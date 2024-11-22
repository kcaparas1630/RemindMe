import { object, string } from "yup";


const userValidationSchema = object({
    body: object({
        first_name: string().required('First name is required'),
        last_name: string().required('Last name is required'),
        username: string().required('Username is required'),
        // password complies to OWASP security
        user_password: string().min(8).max(64).matches(
            /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};:'",.<>\?])/,
            'Password must contain at least one Uppercase letter, one Lowercase letter, one Number, and one Special character'
        ).required('Password is required'),
        user_email: string().email('Email must be a valid email').required('Email is required')
    })
});

export default userValidationSchema;
