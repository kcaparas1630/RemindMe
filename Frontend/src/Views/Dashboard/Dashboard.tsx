import GeneralProps from '../../Interface/General/GeneralProps';
import { FC, ReactNode } from 'react';
import getUserFromToken from '../../Hooks/GetUserNameFromToken';
import GetUser from '../../Hooks/GetUser';
import LoadingSpinner from '../../Commons/LoadingSpinner';
import { DashboardHeader1 } from './Styled-Components/StyledMain';
import { useMediaQuery} from '@react-hook/media-query';
import MobileTable from './MobileTable';
import DesktopTable from './DesktopTable';
import CircularProgressContainer from './CircularProgressContainer';

const Dashboard: FC<GeneralProps> = ({ isDarkMode }): ReactNode => {
  const { userName, token } = getUserFromToken();
  const { users, isPending, isError, error } = GetUser(userName, token);
  const isMobile = useMediaQuery('(max-width: 768px)');
  if (isPending) {
    return <LoadingSpinner isDarkMode={isDarkMode} />;
  }

  if (isError && !!error) {
    return <span>{error.message}</span>;
  }

  return (
    <>
      <DashboardHeader1>Hello, {users?.firstName}</DashboardHeader1>
      {/**Add a div flex row and contain Circular Progress and other divs. */}
      <CircularProgressContainer />
      {users && (
        <>  
          {isMobile ? (
            <MobileTable userTasks={users?.tasks} />
          ) : (
            <DesktopTable userTasks={users?.tasks} />
          )}
        </>
      )}
    </>
  );
};

export default Dashboard;
