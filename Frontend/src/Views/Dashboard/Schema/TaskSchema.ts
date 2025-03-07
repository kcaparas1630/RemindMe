import * as Yup from 'yup';

const todayDate: Date = new Date(Date.now());
const maxDate: Date = new Date('2050-12-31');
const taskValidationSchema = Yup.object().shape({
    taskName: Yup.string().required('Task name is required'),
    taskPriority: Yup.string().oneOf(['LOW', 'MEDIUM', 'HIGH']).required('Task Priority is required'),
    taskProgress: Yup.string().oneOf(['NOTSTARTED', 'STARTED', 'COMPLETED']).required('Task Progress is required'),
    taskDueDate: Yup.date()
    // eslint-disable-next-line
    .transform((originalValue) => new Date(originalValue))
    .min(todayDate, 'Date must be today or later.')
    .max(maxDate, 'Date must be no more than December 31, 2050')
    .required('Due date is required'),
});

export default taskValidationSchema;
