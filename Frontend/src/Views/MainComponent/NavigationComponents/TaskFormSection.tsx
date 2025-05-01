import { FC } from 'react';
import InputField from '../../../Commons/InputFields';
import Button from '../../../Commons/Button';
import axios from 'axios';
import TaskFormProps from '../../../Interface/TaskFormProps';
import taskValidationSchema from '../Schema/TaskSchema';
import {
  FormContainer,
  ErrorMessage,
  InputWrapper,
  StyledForm,
} from '../../Styled-Components/StyledForms';
import SelectField from '../../../Commons/SelectField';
import { TaskPriorityOptions, TaskOptions } from '../../../Constants/TaskOptions';
import DatePickerField from '../../../Commons/DatePicker';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import ApiErrorResponse from '../../../Interface/ErrorResponse';
import DashboardProps from '../../../Interface/DashboardProps';
import { toast } from 'react-toastify';

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
    taskPriority: credentials.taskPriority,
    taskProgress: credentials.taskProgress,
    taskDueDate: credentials.taskDueDate,
  }, config);

  return response.data;
}

const notify = (message: string) => {
  return toast(message);
}
const TaskFormSection: FC<DashboardProps> = ({ isDarkMode, userName, queryClient }) => {
  const formData: TaskFormProps = {
    taskName: '',
    taskPriority: 'LOW',
    taskProgress: 'NOTSTARTED',
    taskDueDate: new Date(Date.now()),
  };


  const methods = useForm<TaskFormProps>({
    resolver: yupResolver(taskValidationSchema),
    defaultValues: formData,
  });

  const mutation = useMutation({
    mutationFn: addTasks,
    onSuccess: async () => {
      notify('Task Added!')
      // reset the form
      methods.reset();
      // refers to Dashboard getUsers queryKey
      await queryClient.invalidateQueries({ queryKey: ['users', userName] });
    },
    onError: (error: Error & {response?: { data: ApiErrorResponse}}) => {
      if (axios.isAxiosError(error) && error.response?.data) {
        notify(error.response.data.message);
        methods.setError('root', {
          message: error.response.data.message,
        });
      } else {
        // Fallback for other types of errors
        // toast nothing special lol.
        notify('An unexpected error occured');
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
              isDarkMode={isDarkMode}
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
            <SelectField
              inputName="taskPriority"
              labelName="Task Priority"
              registerName="taskPriority"
              options={TaskPriorityOptions}
              isDarkMode={isDarkMode}
              error={methods.formState.errors.taskPriority}
            />
            {methods.formState.errors.taskPriority && (
              <ErrorMessage>{methods.formState.errors.taskPriority?.message}</ErrorMessage>
            )}
          </InputWrapper>
          <InputWrapper>
            <SelectField
              inputName="taskProgress"
              labelName="Task Progress"
              registerName="taskProgress"
              options={TaskOptions}
              isDarkMode={isDarkMode}
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
              isDarkMode={isDarkMode}
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
