import Header from '../../Commons/Headers';
import { Table, TableHeader, TableCell } from './Styled-Components/StyledTable';
import GeneralProps from '../../Interface/General/GeneralProps';
import { FC, ReactNode } from 'react';
import getUserFromToken from '../../Hooks/GetUserNameFromToken';
import GetUser from '../../Hooks/GetUser';
import LoadingSpinner from '../../Commons/LoadingSpinner';

const Dashboard: FC<GeneralProps> = ({ isDarkMode, toggleTheme }): ReactNode => {
    const {userName, token } = getUserFromToken(); 
    const { users, isPending, isError, error } = GetUser(userName, token);

    if (isPending) {
        return <LoadingSpinner isDarkMode={isDarkMode} />;
      }
    
      if (isError && !!error) {
        return <span>{error.message}</span>;
      }

    return (
        <>
            <Header 
                isDarkMode={isDarkMode}
                toggleTheme={toggleTheme}
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

        </>
    )
}

export default Dashboard;
