import { FC, useState, JSX } from 'react';
import Header from '../../Commons/Headers';
import Button from '../../Commons/Button';
import { useNavigate } from 'react-router-dom';
import GeneralProps from '../../Interface/General/GeneralProps';
import GetUser from '../../Hooks/GetUser';
import WelcomeUser from './WelcomeUser';
import getUserFromToken from '../../Hooks/GetUserNameFromToken';
import { LayoutDashboard, PlusCircle } from 'lucide-react';
import Sidebar from '../../Commons/Sidebar';
/**
 * this is going to change still.
 * 

 * @param isDarkMode - a state that refers to the dark mode or light mode theme.
 * @param toggleTheme - a function that handles the changing of isDarkMode
 * @returns a ReactNode, renders an html element
 * @author @Kcaparas
 */

interface SidebarItem {
  icon: JSX.Element;
  label: string;
  onClick: () => void;
}

const MainPage: FC<GeneralProps> = ({ isDarkMode, toggleTheme }) => {
  const { userName, token } = getUserFromToken(); 
  const { users } = GetUser(userName, token);
  // IDK HOW TO NAME IT HAHAHA. When login, Greets the user
  const [isWelcomeDone] = useState<boolean>(false);
  const [isLogOutClicked, setIsLogoutClicked] = useState<boolean>(false);
  const navigate = useNavigate();
  const [, setView] = useState('dashboard'); 

  const sidebarItems: SidebarItem[] = [
    {
      icon: <LayoutDashboard size={20} />,
      label: 'Dashboard',
      onClick: () => {
        setView('dashboard')
      }
    },
    {
      icon: <PlusCircle size={20} />,
      label: 'Add Task',
      onClick: () => {
        setView('addTask')
      }
    }
  ];
  const logoutHandler = () => {
    setIsLogoutClicked(true);
    localStorage.removeItem('loginToken');
    navigate('/login');
  };

  
  return (
    <>
      <Header
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme}
      />
      <Sidebar 
        items={sidebarItems}
        isDarkMode={isDarkMode}
      />
      {!isWelcomeDone && (
        <WelcomeUser
          isDarkMode={isDarkMode}
          userName={userName}
          token={token}
          firstName={users?.firstName}
        />
      )}
      {isWelcomeDone && (
        <>
          <Button
            type="button"
            name="Logout"
            disabled={isLogOutClicked}
            isDarkMode={isDarkMode}
            handleClick={logoutHandler}
          >
            Logout
          </Button>
        </>
      )}
    </>
  );
};

export default MainPage;
