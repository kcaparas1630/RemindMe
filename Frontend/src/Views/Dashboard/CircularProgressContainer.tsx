import { FC, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  CircularProgressBarContainer,
  ProgressBarHeaderContainer,
  ProgressBarHeaderText,
  ProgressBarDateTodayText,
  ProgressBarContainer,
  ProgressBarGraphContainer,
  ProgressBarTextContainer,
  ProgressBarText,
  ProgressBarTextHeader,
} from './Styled-Components/CircularProgressBar';

const CircularProgressContainer: FC = () => {
  const tasksDone = 1;
  const totalTasks = 10;
  const progress = (tasksDone / totalTasks) * 100;

  useEffect(() => {
    const timer = setTimeout(() => {
      // This component doesn't need to update progress dynamically
    }, 1000); // Delay to start the animation

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <CircularProgressBarContainer>
      <ProgressBarHeaderContainer>
        <ProgressBarHeaderText>Overview:</ProgressBarHeaderText>
        <ProgressBarDateTodayText>{new Date().toLocaleDateString()}</ProgressBarDateTodayText>
      </ProgressBarHeaderContainer>
      <ProgressBarContainer>
        <ProgressBarGraphContainer>
          <CircularProgressbar
            value={progress}
            text={`${progress}%`}
            styles={{
              path: {
                stroke: `#4CAF50`,
                transition: 'stroke-dashoffset 0.5s ease 0s', // Add transition for animation
              },
              text: {
                fill: '#ffffff',
                fontSize: '0.8rem',
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
              <ProgressBarText>&nbsp;<b>Tasks Done</b></ProgressBarText>
            </span>
          </ProgressBarTextHeader>

          <ProgressBarText>There are {totalTasks - tasksDone} tasks left</ProgressBarText>
        </ProgressBarTextContainer>
      </ProgressBarContainer>
    </CircularProgressBarContainer>
  );
};

export default CircularProgressContainer;
