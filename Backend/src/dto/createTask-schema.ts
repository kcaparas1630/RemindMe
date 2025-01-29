import { date, object, string } from 'yup';

const taskValidationSchema = object({
  body: object({
    taskName: string().required('Task name is required'),
    taskDescription: string().required('Task Description is required'),
    taskProgress: string()
      .oneOf(['NOTSTARTED', 'STARTED', 'COMPLETED'])
      .required('Task Progress is required'),
    taskDueDate: date().required('Due date is required'),
  }),
});

export default taskValidationSchema;
