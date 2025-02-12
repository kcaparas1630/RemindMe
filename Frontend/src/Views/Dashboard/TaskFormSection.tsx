import { FC } from 'react';
import InputField from '../../Commons/InputFields';
import Button from '../../Commons/Button';
// import axios from 'axios';
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
import DatePickerField from '../../Commons/DatePicker';
import LoadingSpinner from '../../Commons/LoadingSpinner';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useQueryClient } from '@tanstack/react-query';
const TaskFormSection: FC<GeneralProps> = ({ isDarkMode }) => {
  const formData: TaskFormProps = {
    taskName: '',
    taskDescription: '',
    taskProgress: 'NOTSTARTED',
    taskDueDate: '',
  };

  const methods = useForm<TaskFormProps>({
    resolver: yupResolver(taskValidationSchema),
    defaultValues: formData,
  });

  const onSubmit: SubmitHandler<TaskFormProps> = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    // eslint-disable-next-line no-console
    console.log(data);
  };

  // const queryClient = useQueryClient();

  // const handleTaskSubmit = async (
  //   values: TaskFormProps,
  //   {
  //     setSubmitting,
  //     setErrors,
  //     resetForm
  //   }: {
  //     // eslint-disable-next-line no-unused-vars
  //     setSubmitting: (isSubmitting: boolean) => void;
  //     // eslint-disable-next-line no-unused-vars
  //     setErrors: (errors: FormikErrors<TaskFormProps>) => void;
  //     resetForm: () => void;
  //   }

  // ): Promise<void> => {
  //   try {
  //     setErrors({});
  //     setSubmitting(true);

  //     const token = localStorage.getItem('loginToken');

  //     // Add token to request headers
  //     const config = {
  //       headers: {
  //         'Authorization': `Bearer ${token}`
  //       }
  //     };

  //     await axios.post('http://localhost:3000/api/task', {
  //       taskName: values.taskName,
  //       taskDescription: values.taskDescription,
  //       taskProgress: values.taskProgress,
  //       taskDueDate: values.taskDueDate,
  //     }, config);

  //     // Reset form after successful submission
  //     resetForm();

  //     // Invalidate and refetch tasks
  //     await queryClient.invalidateQueries({ queryKey: ['tasks'] });

  //   } catch (error) {
  //     if (axios.isAxiosError(error)) {
  //       // Handle validation errors
  //       if (error.response?.data?.details?.message) {
  //         setErrors({ taskName: error.response.data.details.message });
  //       } else if (error.response?.data?.errors) {
  //         setErrors(error.response.data.errors);
  //       } else {
  //         setErrors({ taskName: error.response?.data?.message || 'Failed to add task' });
  //       }
  //     } else {
  //       // requires an object from TaskFormProps to work. Either field will work.
  //       setErrors({ taskName: 'An unexpected error occurred' });
  //     }
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };

  return (
    <FormContainer isDarkMode={isDarkMode}>
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
          <InputWrapper>
            <InputField
              registerName="taskName"
              type="text"
              inputName="taskName"
              labelName="Task Name"
              placeholder="Enter the task name"
              error={methods.formState.errors.taskName}
            />
            {methods.formState.errors.taskName && (
              <ErrorMessage>{methods.formState.errors.taskName?.message}</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <TextArea
              registerName="taskDescription"
              inputName="taskDescription"
              labelName="Task Description"
              placeholder="Enter the task description"
              error={methods.formState.errors.taskDescription}
            />
            {methods.formState.errors.taskDescription && (
              <ErrorMessage>{methods.formState.errors.taskDescription?.message}</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <SelectField
              inputName="taskProgress"
              labelName="Task Progress"
              registerName="taskProgress"
              options={TaskOptions}
              error={methods.formState.errors.taskProgress}
            />
            {methods.formState.errors.taskProgress && (
              <ErrorMessage>{methods.formState.errors.taskProgress?.message}</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <DatePickerField
              inputName="taskDueDate"
              labelName="Task Due Date"
              error={methods.formState.errors.taskDueDate}
            />
            {methods.formState.errors.taskDueDate && (
              <ErrorMessage>{methods.formState.errors.taskDueDate?.message}</ErrorMessage>
            )}
          </InputWrapper>
          <Button
            type="submit"
            name="Submit"
            disabled={methods.formState.isSubmitting}
            isDarkMode={isDarkMode}
          >
            {methods.formState.isSubmitting ? (
              <>
                <LoadingSpinner isDarkMode={isDarkMode} /> Adding...
              </>
            ) : (
              'Add Task'
            )}
          </Button>
        </StyledForm>
      </FormProvider>
    </FormContainer>
  );
};

export default TaskFormSection;
