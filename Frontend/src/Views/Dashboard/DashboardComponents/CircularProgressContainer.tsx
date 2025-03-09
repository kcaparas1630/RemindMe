import { FC, useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  ProgressBarGraphContainer,
  ProgressBarTextContainer,
  ProgressBarText,
  ProgressBarTextHeader,
} from '../Styled-Components/CircularProgressBar';
import CardLayout from '../../../Commons/CardLayout';
import isDarkMode from '../../../Interface/General/isDarkMode';
import UserInterface from '../../../Interface/UserInterface';

interface CircularProgressContainerProps extends isDarkMode {
  users: UserInterface | undefined;
}

const CircularProgressContainer: FC<CircularProgressContainerProps> = ({ isDarkMode, users }) => {
  
  const tasksDone = users?.tasks.filter((task) => {
    if (task.taskProgress === 'COMPLETED') {
      return task;
    }
  }).length ?? 0;
  const totalTasks = users?.tasks.length ?? 0;

  // Now we can safely use these values without undefined checks
  const calculatedProgress = (tasksDone / totalTasks) * 100;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(calculatedProgress);
    }, 1000); // Delay to start the animation

    return () => {
      clearTimeout(timer);
    };
  }, [calculatedProgress]);
  // used empty tag to avoid extra DOM elements
  const rightItem = <>{new Date().toLocaleDateString()}</>
  return (
    <CardLayout title="Overview" isDarkMode={isDarkMode} rightItem={rightItem}>
      <ProgressBarGraphContainer>
        <CircularProgressbar
          value={progress}
          text={`${tasksDone}/${totalTasks}\nRemaining: ${totalTasks - tasksDone}`}
          styles={{
            path: {
              stroke: `#4CAF50`,
              transition: 'stroke-dashoffset 0.5s ease 0s', // Add transition for animation
            },
            text: {
              fill: isDarkMode ? '#DEE2E6' : '#212529',
              fontSize: '0.65rem',
              whiteSpace: 'pre-line',
              dominantBaseline: 'middle',
              textAnchor: 'middle',
            },
            trail: {
              stroke: '#404040',
            },
          }}
        />
      </ProgressBarGraphContainer>
      <ProgressBarTextContainer>
        <ProgressBarTextHeader>
          {tasksDone}
          <span>
            <ProgressBarText>
              &nbsp;<b>Tasks Done</b>
            </ProgressBarText>
          </span>
        </ProgressBarTextHeader>

        <ProgressBarText>There are {totalTasks - tasksDone} tasks left</ProgressBarText>
      </ProgressBarTextContainer>
    </CardLayout>
  );
};

export default CircularProgressContainer;
