import { FC, useState, JSX, Suspense } from 'react';
// import Button from '../../Commons/Button';
import { Outlet, useNavigate } from 'react-router-dom';
import GeneralProps from '../../Interface/General/GeneralProps';
// import GetUser from '../../Hooks/GetUser';
// import WelcomeUser from './WelcomeUser';
// import getUserFromToken from '../../Hooks/GetUserNameFromToken';
import { LayoutDashboard, PlusCircle } from 'lucide-react';
import Sidebar from '../../Commons/Sidebar';
import { MainContainer, MainContent } from './Styled-Components/StyledMain';
import LoadingSpinner from '../../Commons/LoadingSpinner';
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
  activePath: string;
  onClick: () => void;
}

const MainPageLayout: FC<GeneralProps> = ({ isDarkMode }) => {
  // const { userName, token } = getUserFromToken(); 
  // const { users } = GetUser(userName, token);
  const [, setIsLogoutClicked] = useState<boolean>(false);
  const navigate = useNavigate(); 
  const [activePath, setActivePath] = useState<string>('dashboard');
  const sidebarItems: SidebarItem[] = [
    {
      icon: <LayoutDashboard size={20} />,
      label: 'Dashboard',
      activePath: 'dashboard',
      onClick: () => {
        navigate('dashboard')
        setActivePath('dashboard')
      }
    },
    {
      icon: <PlusCircle size={20} />,
      label: 'Add Task',
      activePath: 'addTasks',
      onClick: () => {
        navigate('addTasks')
        setActivePath('addTasks')
      }
    }
  ];
  const logoutHandler = () => {
    setIsLogoutClicked(true);
    localStorage.removeItem('loginToken');
    navigate('/login');
  };

  
  return (
    <MainContainer>
      <Sidebar 
        items={sidebarItems}
        isDarkMode={isDarkMode}
        activePath={activePath}
      />
      <MainContent
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Suspense fallback={<LoadingSpinner isDarkMode={isDarkMode} />}>
          <Outlet context={{ isDarkMode }} />
        </Suspense>
      </MainContent>
    </MainContainer>
  );
};

export default MainPageLayout;
