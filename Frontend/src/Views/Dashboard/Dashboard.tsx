import { FC, useState } from 'react';
import Header from '../../Commons/Headers';
import UserInterface from '../../Interface/UserInterface';
import { Table, TableHeader, TableCell } from './Styled-Components/StyledTable';
import Button from '../../Commons/Button';
import { useNavigate } from 'react-router-dom';
import GeneralProps from '../../Interface/General/GeneralProps';
import TaskFormSection from './TaskFormSection';
import { useQuery, useQueryClient, UseQueryResult } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from '../../Commons/LoadingSpinner';
import { ToastContainer } from 'react-toastify';
/**
 * this is going to change still.
 * 

 * @param isDarkMode - a state that refers to the dark mode or light mode theme.
 * @param toggleTheme - a function that handles the changing of isDarkMode
 * @returns a ReactNode, renders an html element
 * @author @Kcaparas
 */
const Dashboard: FC<GeneralProps> = ({ isDarkMode, toggleTheme }) => {
  const [isLogOutClicked, setIsLogoutClicked] = useState<boolean>(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const logoutHandler = () => {
    setIsLogoutClicked(true);
    localStorage.removeItem('loginToken');
    navigate('/login');
  };
  // get token from local storage
  const token = localStorage.getItem('loginToken');
  const userName: string = token ? JSON.parse(atob(token.split('.')[1])).sub : null;
  const getTasks = async (userName: string): Promise<UserInterface> => {
    const response = await axios.get(`http://localhost:3000/api/user/${userName}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  const {
    data: users,
    isPending,
    isError,
    error,
  }: UseQueryResult<UserInterface, Error> = useQuery({
    queryKey: ['users', userName],
    queryFn: () => {
      return getTasks(userName);
    },
    enabled: !!userName,
  });

  if (isPending) {
    return <LoadingSpinner isDarkMode={isDarkMode} />;
  }

  if (isError) {
    return <span>{error.message}</span>;
  }
  return (
    <>
      <ToastContainer />
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <TaskFormSection
        isDarkMode={isDarkMode}
        userName={userName}
        queryClient={queryClient}
      />
      {users && (
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
            {/** Null Check users and users.tasks. Because it will throw a users is undefined  */}
            {users &&
              users.tasks &&
              users?.tasks.map((taskItem, index) => {
                return (
                  <tr key={`${users.id}-${index}`}>
                    <TableCell>{taskItem.taskName}</TableCell>

                    <TableCell>{taskItem.taskDescription}</TableCell>
                    <TableCell>{taskItem.taskProgress}</TableCell>
                    <TableCell>
                      {new Date(taskItem.taskDueDate).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </TableCell>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      )}

      <Button
        type="button"
        name="Logout"
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
