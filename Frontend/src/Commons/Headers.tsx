import { FC } from 'react';
import { HeaderContainer, ThemeToggle } from './StyledCommons/StyledHeader';
import { Sun, Moon } from 'lucide-react';

const Header: FC<{ themeMode: 'light' | 'dark'; toggleTheme: () => void }> = ({ themeMode, toggleTheme }) => {
  return (
    <HeaderContainer>
      <ThemeToggle onClick={toggleTheme}>
        {themeMode === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
      </ThemeToggle>
    </HeaderContainer>
  );
};

export default Header;
