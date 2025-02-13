import { FC } from 'react';
import InputField from '../../Commons/InputFields';
import Button from '../../Commons/Button';
import axios from 'axios';
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
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import ApiErrorResponse from '../../Interface/ErrorResponse';
import DashboardProps from '../../Interface/DashboardProps';
import { ToastContainer, toast } from 'react-toastify';

const addTasks = async (credentials: TaskFormProps) => {
  const token = localStorage.getItem('loginToken');

  // Add token to request headers
  const config = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  const response = await axios.post('http://localhost:3000/api/task', {
    taskName: credentials.taskName,
    taskDescription: credentials.taskDescription,
    taskProgress: credentials.taskProgress,
    taskDueDate: credentials.taskDueDate,
  }, config);

  return response.data;
}
const TaskFormSection: FC<DashboardProps> = ({ isDarkMode, userName, queryClient }) => {
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

  const mutation = useMutation({
    mutationFn: addTasks,
    onSuccess: async () => {
      // reset the form
      methods.reset();
      await queryClient.invalidateQueries({ queryKey: ['users', userName] });
    },
    onError: (error: Error & {response?: { data: ApiErrorResponse}}) => {
      if (axios.isAxiosError(error) && error.response?.data) {
        methods.setError('root', {
          message: error.response.data.message,
        });
      } else {
        // Fallback for other types of errors
        methods.setError('root', {
          message: 'An unexpected error occurred',
        });
      }
    },
  })

  const onSubmit: SubmitHandler<TaskFormProps> = async (data) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 3000);
    });
    mutation.mutate(data);
  };

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
            {methods.formState.isSubmitting ? 'Adding...' : 'Submit'}
          </Button>
          {methods.formState.errors.root && (
              <ErrorMessage>{methods.formState.errors.root?.message}</ErrorMessage>
            )}
        </StyledForm>
      </FormProvider>
    </FormContainer>
  );
};

export default TaskFormSection;
