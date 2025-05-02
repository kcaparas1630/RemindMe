import { FC } from 'react';
import {
  OverviewContainer,
  OverviewHeader,
  OverviewGroup,
  OverviewItem,
  OverviewItemHeader,
  OverviewItemContent,
} from '../Styled-Components/StyledOverview';
import isDarkMode from '../../../Interface/General/isDarkMode';
import UserInterface from '../../../Interface/UserInterface';

interface OverviewProps extends isDarkMode {
  users: UserInterface | undefined;
}

const Overview: FC<OverviewProps> = ({ users, isDarkMode }) => {
  // Calculate the number of tasks done by calling user object assigned from GetUser hook
  const tasksDone =
    users?.tasks.filter((task) => {
      if (task.taskProgress === 'COMPLETED') {
        return task;
      }
    }).length ?? 0; // fallback to 0 if empty.
  // Calculate the total number of tasks
  const totalTasks = users?.tasks.length ?? 0;
  // Calculate the number of tasks remaining
  const tasksRemaining = totalTasks - tasksDone;
  return (
    <OverviewContainer>
      <OverviewHeader isDarkMode={isDarkMode}>Overview</OverviewHeader>
      <OverviewGroup>
        <OverviewItem>
          <OverviewItemContent isDarkMode={isDarkMode}>{tasksRemaining}</OverviewItemContent>
          <OverviewItemHeader isDarkMode={isDarkMode}>Tasks Remaining</OverviewItemHeader>
        </OverviewItem>
        <OverviewItem>
          <OverviewItemContent isDarkMode={isDarkMode}>{tasksDone}/{totalTasks}</OverviewItemContent>
          <OverviewItemHeader isDarkMode={isDarkMode}>Tasks Done</OverviewItemHeader>
        </OverviewItem>
      </OverviewGroup>
    </OverviewContainer>
  );
};

export default Overview;
