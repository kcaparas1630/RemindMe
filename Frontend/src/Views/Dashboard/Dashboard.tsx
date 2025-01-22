import { FC, useState } from 'react';
import Header from '../../Commons/Headers';
import TaskInterface from '../../Interface/TaskInterface';
import { Table, TableHeader, TableCell } from './Styled-Components/StyledTable';
import Button from '../../Commons/Button';
import { useNavigate } from 'react-router-dom';
interface DashboardProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}



const Dashboard: FC<DashboardProps> = ({ isDarkMode, toggleTheme }) => {
  const [isLogOutClicked, setIsLogoutClicked] = useState<boolean>(false);
  const navigate = useNavigate();

  const logoutHandler = () => {
    setIsLogoutClicked(true);
    localStorage.removeItem('loginToken');
    navigate('/login');  
  };

  const tasks: TaskInterface[] = [
    {
      taskName: 'task1',
      taskDescription: 'task1desc',
      taskProgress: 'Not Started',
      taskDueDate: 'Tomorrow',
    },
    {
      taskName: 'task2',
      taskDescription: 'task2desc',
      taskProgress: 'Not Started',
      taskDueDate: 'Tomorrow',
    },
    {
      taskName: 'task3',
      taskDescription: 'task3desc',
      taskProgress: 'Not Started',
      taskDueDate: 'Tomorrow',
    },
  ];

  return (
    <>
      <Header
        themeMode={isDarkMode ? 'dark' : 'light'}
        toggleTheme={toggleTheme}
      />
      <Table>
        <thead>
          <tr>
            <TableHeader>Task Name</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Progress</TableHeader>
            <TableHeader>Due Date</TableHeader>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => {
            return (
              <tr key={index}>
                <TableCell>{task.taskName}</TableCell>
                <TableCell>{task.taskDescription}</TableCell>
                <TableCell>{task.taskProgress}</TableCell>
                <TableCell>{task.taskDueDate}</TableCell>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <Button
        type='button'
        name='Logout'
        disabled={isLogOutClicked}
        isDarkMode={isDarkMode}
        handleClick={logoutHandler}
      >
        Logout
      </Button>
    </>
  );
};

export default Dashboard;
