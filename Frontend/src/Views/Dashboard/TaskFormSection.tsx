import { FC, useState } from "react";
import InputField from "../../Commons/InputFields";
import Button from "../../Commons/Button";
import axios from "axios";
import { Formik, FormikErrors } from "formik";
import GeneralProps from "../../Interface/General/GeneralProps";
import TaskFormProps from "../../Interface/TaskFormProps";
import taskValidationSchema from "./Schema/TaskSchema";
import {
    FormContainer,
    ErrorMessage,
    InputWrapper,
    StyledForm,
  } from '../../Styled-Components/StyledForms';
const TaskFormSection: FC<GeneralProps> = ({ isDarkMode }) => {
    const [formData] = useState<TaskFormProps>({
        taskName: '',
        taskDescription: '',
        taskProgress: '',
        taskDueDate: new Date(Date.now()),
    });

    const handleTaskSubmit = async (
        values: TaskFormProps,
    
        {
          setSubmitting,
          setErrors,
        }: // eslint-disable-next-line no-unused-vars
        { setSubmitting: (isSubmitting: boolean) => void; setErrors: (errors: FormikErrors<TaskFormProps>) => void }
      ): Promise<void> => {
        try {
          setErrors({});
          setSubmitting(true);
    
          await axios.post('http://localhost:3000/api/task', {
            taskName: values.taskName,
            taskDescription: values.taskDescription,
            taskProgress: values.taskProgress,
            taskDueDate: values.taskDueDate,
          });
    
          
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const serverError = error.response?.data?.message;
            setErrors(serverError || 'Login failed');
    
            if (error.response?.data?.errors) {
              setErrors(error.response.data.errors);
            }
          } else {
            // requires an object from TaskFormProps to work. Either field will work.
            setErrors({ taskName: 'An unexpected error occurred' });
          }
        } finally {
          setSubmitting(false);
        }
      };

    return (
        <>
            <Formik
                initialValues={formData}
                validationSchema={taskValidationSchema}
                onSubmit={handleTaskSubmit}
            >
                
            </Formik>
        </>
    )
}

export default TaskFormSection;
