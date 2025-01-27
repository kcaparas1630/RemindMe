import { FC, useState } from 'react';
import InputField from '../../Commons/InputFields';
import Button from '../../Commons/Button';
import axios from 'axios';
import { Formik, FormikErrors } from 'formik';
import GeneralProps from '../../Interface/General/GeneralProps';
import TaskFormProps from '../../Interface/TaskFormProps';
import taskValidationSchema from './Schema/TaskSchema';
import {
  FormContainer,
  ErrorMessage,
  InputWrapper,
  StyledForm,
} from '../Styled-Components/StyledForms';
import TextArea from '../../Commons/TextArea';
import SelectField from '../../Commons/SelectField';
import TaskOptions from '../../Constants/TaskOptions';
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
    }: 
    {
      // eslint-disable-next-line no-unused-vars
      setSubmitting: (isSubmitting: boolean) => void;
      // eslint-disable-next-line no-unused-vars
      setErrors: (errors: FormikErrors<TaskFormProps>) => void;
    }
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
    <FormContainer isDarkMode={isDarkMode}>
      <Formik
        initialValues={formData}
        validationSchema={taskValidationSchema}
        onSubmit={(values, { setSubmitting, setErrors }) => {
          handleTaskSubmit(values, { setSubmitting, setErrors });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => {
          return (
            <StyledForm onSubmit={handleSubmit}>
              <InputWrapper>
                <InputField
                  type="text"
                  inputName="taskName"
                  labelName="Task Name"
                  placeholder="Enter the task name"
                  value={values.taskName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.taskName && touched.taskName}
                />
                {errors.taskName && touched.taskName && (
                  <ErrorMessage>{errors.taskName}</ErrorMessage>
                )}
              </InputWrapper>
              <InputWrapper>
                <TextArea
                    inputName='taskDescription'
                    labelName='Task Description'
                    placeholder='Enter the task description'
                    value={values.taskDescription}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.taskDescription && touched.taskDescription}
                />
                {errors.taskDescription && touched.taskDescription && (
                    <ErrorMessage>{errors.taskDescription}</ErrorMessage>
                )}
              </InputWrapper>
              <InputWrapper>
                <SelectField
                  inputName='taskProgress'
                  labelName='Task Progress'
                  value={values.taskProgress}
                  options={TaskOptions}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.taskProgress && touched.taskProgress}
                />
                {errors.taskProgress && touched.taskProgress && (
                  <ErrorMessage>{errors.taskProgress}</ErrorMessage>
                )}
              </InputWrapper>
              <Button
                type="submit"
                name="Submit"
                disabled={isSubmitting}
                isDarkMode={isDarkMode}
              >
                {isSubmitting ? 'Adding...' : 'Add Task'}
              </Button>
            </StyledForm>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default TaskFormSection;
