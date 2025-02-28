import { FC } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import GeneralProps from '../../Interface/General/GeneralProps';
import TaskFormSection from './TaskFormSection';
import getUserFromToken from '../../Hooks/GetUserNameFromToken';

const AddTasks: FC<GeneralProps> = ({ isDarkMode, toggleTheme }) => {
  const queryClient = useQueryClient();
  const { userName } = getUserFromToken(); 


  return (
    <>
      <ToastContainer />
      <TaskFormSection
        isDarkMode={isDarkMode}
        userName={userName}
        queryClient={queryClient}
      />
    </>
  );
};

export default AddTasks;
