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

const CircularProgressContainer: FC<isDarkMode> = ({ isDarkMode }) => {
  
  const tasksDone = 5;
  const totalTasks = 10;
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

  return (
    <CardLayout title="Overview" isDarkMode={isDarkMode}>
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
    //   <CardLayout title="Overview">
    //     <ProgressBarHeaderContainer>
    //       <ProgressBarHeaderText>Overview:</ProgressBarHeaderText>
    //       <ProgressBarDateTodayText>{new Date().toLocaleDateString()}</ProgressBarDateTodayText>
    //     </ProgressBarHeaderContainer>
    //     <ProgressBarContainer>
    // //       <ProgressBarGraphContainer>
    // //         <CircularProgressbar
    // //           value={progress}
    // //           text={`${tasksDone}/${totalTasks}\nRemaining: ${totalTasks - tasksDone}`}
    // //           styles={{
    // //             path: {
    // //               stroke: `#4CAF50`,
    // //               transition: 'stroke-dashoffset 0.5s ease 0s', // Add transition for animation
    // //             },
    // //             text: {
    // //               fill: '#ffffff',
    // //               fontSize: '0.65rem',
    // //               whiteSpace: 'pre-line',
    // //               dominantBaseline: 'middle',
    // //               textAnchor: 'middle',
    // //             },
    // //             trail: {
    // //               stroke: '#404040',
    // //             },
    // //           }}
    // //         />
    // //       </ProgressBarGraphContainer>
    // //       <ProgressBarTextContainer>
    // //         <ProgressBarTextHeader>
    // //           {tasksDone}
    // //           <span>
    // //             <ProgressBarText>&nbsp;<b>Tasks Done</b></ProgressBarText>
    // //           </span>
    // //         </ProgressBarTextHeader>

    // //         <ProgressBarText>There are {totalTasks - tasksDone} tasks left</ProgressBarText>
    // //       </ProgressBarTextContainer>
    // //     </ProgressBarContainer>
    // //   </CardLayout>
    // // );
  );
};

export default CircularProgressContainer;
