import { FC } from 'react';
import Header from '../../Commons/Headers';

interface DashboardProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Dashboard: FC<DashboardProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <>
      <Header
        themeMode={isDarkMode ? 'dark' : 'light'}
        toggleTheme={toggleTheme}
      />
    </>
  );
};

export default Dashboard;
