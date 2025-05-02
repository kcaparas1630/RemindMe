/**
 * @params themeMode - choices between light or dark
 *         toggleTheme - it's a click handler that toggles the themeMode from light to dark.
 * @returns A ReactNode, rendered as an HTML element
 * @author @Kcaparas
 */
import { FC } from 'react';
import { HeaderContainer, ThemeToggle, HeaderLeft, PageTitle } from './StyledCommons/StyledHeader';
import { Sun, Moon } from 'lucide-react';
import GeneralProps from '../Interface/General/GeneralProps';
import { useLocation } from 'react-router-dom';

const Header: FC<GeneralProps> = ({ isDarkMode, toggleTheme }) => {
  const pathToTitle: Record<string, string> = {
    '/main/dashboard': 'Dashboard',
    '/main/addTasks': 'Tasks',
  }
  const location = useLocation();
  const pageTitle = pathToTitle[location.pathname];
  
  return (
    <HeaderContainer isDarkMode={isDarkMode}>
      <HeaderLeft>
        <PageTitle>{pageTitle}</PageTitle>
      </HeaderLeft>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;
