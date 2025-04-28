import GeneralProps from '../../../Interface/General/GeneralProps';
import { FC, ReactNode } from 'react';
import getUserFromToken from '../../../Hooks/GetUserNameFromToken';
import GetUser from '../../../Hooks/GetUser';
import LoadingSpinner from '../../../Commons/LoadingSpinner';
import { ButtonContainer, DashboardHeader2, DashboardHeaderGroup, DashboardHeaderText, NoTasksContainer, NoTasksText } from '../Styled-Components/StyledMain';
import { useMediaQuery } from '@react-hook/media-query';
import MobileTable from '../DashboardComponents/MobileTable';
import DesktopTable from '../DashboardComponents/DesktopTable';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import Button from '../../../Commons/Button';
import { useNavigate } from 'react-router-dom';
import Overview from '../DashboardComponents/Overview';
import QuickActions from '../DashboardComponents/QuickActions';
import Goals from '../DashboardComponents/Goals';
const Dashboard: FC<GeneralProps> = ({ isDarkMode }): ReactNode => {
  const navigate = useNavigate();
  const { userName, token } = getUserFromToken();
  const { users, isPending, isError, error } = GetUser(userName, token);
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isPending) {
    return <LoadingSpinner isDarkMode={isDarkMode} />;
  }

  if (isError && !!error) {
    return <span>{error.message}</span>;
  }
  const welcomeText = `Hello, ${users?.firstName}`;
  return (
    <>
      <DashboardHeaderGroup>
        <DashboardHeader2>
          <AnimatePresence>
          {welcomeText.split('').map((char, index) => {
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: 'easeIn',
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </AnimatePresence>
      </DashboardHeader2>
      <DashboardHeaderText isDarkMode={isDarkMode}>Stay on top of your tasks</DashboardHeaderText>
      </DashboardHeaderGroup>
      {users && users.tasks.length > 0 ? (
        <>
          <Overview users={users} isDarkMode={isDarkMode} />
          <Goals />
          <QuickActions isDarkMode={isDarkMode} />
          <h3>Tasks</h3>
          {isMobile ? (
            <MobileTable userTasks={users.tasks} />
          ) : (
            <DesktopTable userTasks={users.tasks} />
          )}
        </>
      ): (
        <NoTasksContainer>
          <NoTasksText>You have no tasks yet. Create one to get started.</NoTasksText>
          <ButtonContainer>
            <Button
              type="button"
              name="Create Task"
              handleClick={() => {
                navigate('/main/addTasks');
              }}
            disabled={false}
            isDarkMode={isDarkMode}
          >
              Create Task
            </Button>
          </ButtonContainer>
        </NoTasksContainer>
      )}
    </>
  );
};

export default Dashboard;
