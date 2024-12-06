import { date, object, string } from "yup";

const taskValidationSchema = object({
    body: object({
        task_name: string().required('Task name is required'),
        task_description: string().required('Task Description is required'),
        task_progress: string().oneOf(['NOTSTARTED', 'STARTED', 'COMPLETED']).required('Task Progres is required'),
        task_due_date: date().required('Due date is required')
    })
});

export default taskValidationSchema;
