import { object, string } from "yup";


const userValidationSchema = object({
    body: object({
        first_name: string().required('First name is required'),
        last_name: string().required('Last name is required')
    })
});

export default userValidationSchema;
