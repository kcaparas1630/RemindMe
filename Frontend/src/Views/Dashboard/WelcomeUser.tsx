import { FC } from 'react';
import DashboardWelcomeProps from '../../Interface/DashboardWelcomeProps';
import TaskInterface from '../../Interface/TaskInterface';
import GetTasksDueToday from '../../Hooks/GetTasksDueToday';
import { PlusCircle, LayoutDashboard, CheckCircle2 } from 'lucide-react';
import {
  Container,
  WelcomeSection,
  WelcomeTitle,
  EmptyStateContainer,
  Card,
  EmptyStateText,
  TaskBullet,
  TaskItem,
  TaskText,
  TasksContainer,
  TasksList,
  TasksTitle,
  QuickActionsSection,
  ActionButton,
  ActionsGrid,
  ActionsTitle,
  MotionWrapper,
} from './Styled-Components/StyledWelcome';
import { motion, AnimatePresence } from 'framer-motion';

const slideUpAnimation = {
  initial: { opacity: 0, y: '100vh' },
  animate: { opacity: 1, y: 0 },
  transition: {
    type: 'spring',
    duration: 0.5,
    bounce: 0.5,
    damping: 10,
    stiffness: 80,
    delay: 0.5,
  },
};

const WelcomeUser: FC<DashboardWelcomeProps> = ({ isDarkMode, firstName, userName, token }) => {
  const { users } = GetTasksDueToday(userName, token);

  const tasks: TaskInterface[] | undefined = users;

  const getTimeOfDay = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'morning';
    if (hour < 17) return 'afternoon';
    return 'evening';
  };

  const welcomeText = `Good ${getTimeOfDay()}, ${firstName}`;

  return (
    <Container {...slideUpAnimation}>
      <WelcomeSection>
        <WelcomeTitle>
          <AnimatePresence>
            {welcomeText.split('').map((char, index) => {
              return (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                  duration: 1,
                  delay: index * 0.05, // Each character appears with a slight delay
                  ease: "easeIn"
                }}
              >
                  {char}
                </motion.span>
              );
            })}
          </AnimatePresence>
        </WelcomeTitle>

        <Card isDarkMode={isDarkMode}>
          {tasks?.length === 0 ? (
            <EmptyStateContainer>
              <CheckCircle2
                size={48}
                color="#22c55e"
              />
              <EmptyStateText isDarkMode={isDarkMode}>
                You're all caught up! No tasks due today.
              </EmptyStateText>
            </EmptyStateContainer>
          ) : (
            <TasksContainer>
              <TasksTitle>
                You have {tasks?.length} task{tasks?.length === 1 ? '' : 's'} due today
              </TasksTitle>
              <TasksList>
                {tasks?.map((task, index) => {
                  return (
                    <TaskItem key={index}>
                      <TaskBullet />
                      <TaskText>{task.taskName}</TaskText>
                    </TaskItem>
                  );
                })}
              </TasksList>
            </TasksContainer>
          )}
        </Card>
      </WelcomeSection>

      <QuickActionsSection>
        <ActionsTitle>What would you like to do?</ActionsTitle>
        <ActionsGrid>
          <MotionWrapper>
            <ActionButton isDarkMode={isDarkMode}>
              <PlusCircle size={20} />
              <span>Add New Task</span>
            </ActionButton>
          </MotionWrapper>
          <MotionWrapper>
            <ActionButton isDarkMode={isDarkMode}>
              <LayoutDashboard size={20} />
              <span>View Dashboard</span>
            </ActionButton>
          </MotionWrapper>
        </ActionsGrid>
      </QuickActionsSection>
    </Container>
  );
};

export default WelcomeUser;
