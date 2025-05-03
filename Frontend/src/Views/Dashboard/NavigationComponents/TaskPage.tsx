import { FC, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import GeneralProps from '../../../Interface/General/GeneralProps';
import TaskFormSection from './TaskFormSection';
import getUserFromToken from '../../../Hooks/GetUserNameFromToken';
import TabButton from '../../../Commons/TabButton';
import { TaskNavigation } from '../Styled-Components/StyledTask';
import GetUser from '../../../Hooks/GetUser';
import LoadingSpinner from '../../../Commons/LoadingSpinner';
import MobileTableTaskComponent  from './MobileTableTaskComponent';
import { useMediaQuery } from '@react-hook/media-query';
import TaskInterface from '../../../Interface/TaskInterface';
import DesktopTableTaskComponent from './DesktopTableTaskComponent';

const TaskPage: FC<GeneralProps> = ({ isDarkMode }) => {
  const queryClient = useQueryClient();
  const { userName, token } = getUserFromToken(); 
  const { users, isPending, isError, error } = GetUser(userName, token);
  const [activeTab, setActiveTab] = useState<string>('tasks-list');
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Table States
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [, setEditValues] = useState<{
    taskName: string;
    taskPriority: 'LOW' | 'MEDIUM' | 'HIGH';
    taskDueDate: Date;
  }>({ taskName: '', taskPriority: 'LOW', taskDueDate: new Date() });

  const handleEditClick = (task: TaskInterface) => {
    setEditingTaskId(task.id);
    setEditValues({
      taskName: task.taskName,
      taskPriority: task.taskPriority as 'LOW' | 'MEDIUM' | 'HIGH',
      taskDueDate: task.taskDueDate,
    });
  };

  const handleCancelClick = () => {
    setEditingTaskId(null);
  };

  if (isPending) {
    return <LoadingSpinner isDarkMode={isDarkMode} />;
  }

  if (isError && !!error) {
    return <span>{error.message}</span>;
  }

  const handleTabClick = (tab: string) => {
    if (tab !== activeTab) {
      setEditingTaskId(null);
    }
    setActiveTab(tab);
  };

  return (
    <>
      <ToastContainer /> {/* This is absolute and not relative to component */}
      <TaskNavigation>
        <TabButton id="tasks-list" label="Task List" isActive={activeTab === 'tasks-list'} controls="tasks-list-panel" onClick={() => {handleTabClick('tasks-list')}} isDarkMode={isDarkMode} />
        <TabButton id="add-task" label="Add Task" isActive={activeTab === 'add-task'} controls="add-tasks-panel" onClick={() => {handleTabClick('add-task')}} isDarkMode={isDarkMode} />
      </TaskNavigation>
      {activeTab === 'tasks-list' && (
        isMobile 
          ? <MobileTableTaskComponent userTasks={users?.tasks} isDarkMode={isDarkMode} userName={userName} handleEditClick={handleEditClick} handleCancelClick={handleCancelClick} editingTaskId={editingTaskId} /> 
          : <DesktopTableTaskComponent userTasks={users?.tasks} isDarkMode={isDarkMode} userName={userName} handleEditClick={handleEditClick} handleCancelClick={handleCancelClick} editingTaskId={editingTaskId} />
      )}
      {activeTab === 'add-task' && <TaskFormSection userName={userName} isEditing={editingTaskId !== null} onCancel={handleCancelClick} queryClient={queryClient} isDarkMode={isDarkMode} />}
    </>
  );
};

export default TaskPage;
