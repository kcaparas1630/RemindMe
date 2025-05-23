import { FC, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import GeneralProps from '../../../Interface/General/GeneralProps';
import TaskFormSection from './TaskFormSection';
import getUserFromToken from '../../../Hooks/GetUserNameFromToken';
import TabButton from '../../../Commons/TabButton';
import { TaskNavigation } from '../Styled-Components/StyledTasks';
import GetUser from '../../../Hooks/GetUser';
import LoadingSpinner from '../../../Commons/LoadingSpinner';
import TaskTable from './TaskTable';
import { useMediaQuery } from '@react-hook/media-query';

const TaskView: FC<GeneralProps> = ({ isDarkMode }) => {
  const queryClient = useQueryClient();
  const { userName, token } = getUserFromToken();
  const { users, isPending, isError, error } = GetUser(userName, token);
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [activeTab, setActiveTab] = useState<string>('tasks-list');

  if (isPending) {
    return <LoadingSpinner isDarkMode={isDarkMode} />;
  }

  if (isError && !!error) {
    return <span>{error.message}</span>;
  }

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <ToastContainer /> {/* This is absolute and not relative to component */}
      <TaskNavigation>
        <TabButton
          id="tasks-list"
          label="Task List"
          isActive={activeTab === 'tasks-list'}
          controls="tasks-list-panel"
          onClick={() => {
            handleTabClick('tasks-list');
          }}
          isDarkMode={isDarkMode}
        />
        <TabButton
          id="add-task"
          label="Add Task"
          isActive={activeTab === 'add-task'}
          controls="add-tasks-panel"
          onClick={() => {
            handleTabClick('add-task');
          }}
          isDarkMode={isDarkMode}
        />
      </TaskNavigation>
      {activeTab === 'tasks-list' && (
        <TaskTable
          userTasks={users?.tasks}
          variant={isMobile ? "mobile" : "desktop"}
          userName={userName}
          isDarkMode={isDarkMode}
        />
      )}
      {activeTab === 'add-task' && (
        <TaskFormSection
          userName={userName}
          queryClient={queryClient}
          isDarkMode={isDarkMode}
        />
      )}
    </>
  );
};

export default TaskView;
