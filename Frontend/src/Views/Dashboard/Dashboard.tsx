import { FC, useState } from 'react';
import Header from '../../Commons/Headers';
import { Table, TableHeader, TableCell } from './Styled-Components/StyledTable';
import Button from '../../Commons/Button';
import { useNavigate } from 'react-router-dom';
import GeneralProps from '../../Interface/General/GeneralProps';
import TaskFormSection from './TaskFormSection';
import { useQueryClient } from '@tanstack/react-query';
import LoadingSpinner from '../../Commons/LoadingSpinner';
import { ToastContainer } from 'react-toastify';
import GetUser from '../../Hooks/GetUser';
import WelcomeUser from './WelcomeUser';
/**
 * this is going to change still.
 * 

 * @param isDarkMode - a state that refers to the dark mode or light mode theme.
 * @param toggleTheme - a function that handles the changing of isDarkMode
 * @returns a ReactNode, renders an html element
 * @author @Kcaparas
 */

// get token from local storage
const token = localStorage.getItem('loginToken');
const userName: string = token ? JSON.parse(atob(token.split('.')[1])).sub : null;

const Dashboard: FC<GeneralProps> = ({ isDarkMode, toggleTheme }) => {
  const { users, isPending, isError, error } = GetUser(userName, token);
  // IDK HOW TO NAME IT HAHAHA. When login, Greets the user
  const [isWelcomeDone] = useState<boolean>(false);
  const [isLogOutClicked, setIsLogoutClicked] = useState<boolean>(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const logoutHandler = () => {
    setIsLogoutClicked(true);
    localStorage.removeItem('loginToken');
    navigate('/login');
  };

  if (isPending) {
    return <LoadingSpinner isDarkMode={isDarkMode} />;
  }

  if (isError && !!error) {
    return <span>{error.message}</span>;
  }
  return (
    <>
      <ToastContainer />
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      {!isWelcomeDone && (
        <WelcomeUser
          isDarkMode={isDarkMode}
          userName={userName}
          token={token}
          firstName={users?.firstName}
        />
      )}
      {isWelcomeDone && (
        <>
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
      )}
    </>
  );
};

export default Dashboard;
