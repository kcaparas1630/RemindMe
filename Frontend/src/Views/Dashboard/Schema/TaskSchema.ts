import * as Yup from 'yup';

const taskValidationSchema = Yup.object().shape({
    taskName: Yup.string().required('Task name is required'),
    taskDescription: Yup.string().required('Task Description is Required'),
    taskProgress: Yup.string().oneOf(['NOTSTARTED', 'STARTED', 'COMPLETED']).required('Task Progress is required'),
    taskDueDate: Yup.date().required('Due date is required'),
});

export default taskValidationSchema;
