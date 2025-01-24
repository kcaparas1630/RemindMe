/**
 * @params themeMode - choices between light or dark
 *         toggleTheme - it's a click handler that toggles the themeMode from light to dark.
 * @returns A ReactNode, rendered as an HTML element
 * @author @Kcaparas
 */
import { FC } from 'react';
import { HeaderContainer, ThemeToggle } from './StyledCommons/StyledHeader';
import { Sun, Moon } from 'lucide-react';
import GeneralProps from '../Interface/GeneralProps';

const Header: FC<GeneralProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <HeaderContainer>
      <ThemeToggle onClick={toggleTheme}>
        {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;
