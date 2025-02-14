import { FC } from 'react';
import DashboardWelcomeProps from '../../Interface/DashboardWelcomeProps';
import TaskInterface from '../../Interface/TaskInterface';

const WelcomeUser: FC<DashboardWelcomeProps> = ({ user, isDarkMode }) => {
  const userName: string | undefined = user?.firstName;
  const tasks: TaskInterface[] | undefined = user?.tasks;
  const timeNow: number = new Date(Date.now()).getHours();
  let timeOfDay: string = '';

  if (timeNow < 12) {
    timeOfDay = 'Morning';
  } else if (timeNow >= 12 && timeNow <= 18) {
    timeOfDay = 'Afternoon';
  } else if (timeNow >= 18) {
    timeOfDay = 'Evening';
  }
  return (
    <>
      <h1>
        Good {timeOfDay}, {userName}
      </h1>
      {tasks && tasks.length === 0 ? (
        <h2>You don't have any tasks.</h2>
      ) : (
        <>
          <h2>Here are your tasks</h2>
          {tasks?.map((taskItem, index) => {
            return (
                <p key={index}>* {taskItem.taskName}</p>
            )
          })}
        </>
      )}
    </>
  );
};

export default WelcomeUser;
