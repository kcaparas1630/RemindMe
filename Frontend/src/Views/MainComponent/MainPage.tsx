import { FC, Suspense } from 'react';
// import Button from '../../Commons/Button';
import { Outlet } from 'react-router-dom';
import GeneralProps from '../../Interface/General/GeneralProps';
// import Sidebar from '../../Commons/Sidebar';
import { MainContainer, MainContent } from './Styled-Components/StyledMain';
import LoadingSpinner from '../../Commons/LoadingSpinner';
import Navigation from '../../Commons/Navigation';
// import { SidebarItemType } from '../../Interface/SidebarProps';
/**
 * this is going to change still.
 * 

 * @param isDarkMode - a state that refers to the dark mode or light mode theme.
 * @param toggleTheme - a function that handles the changing of isDarkMode
 * @returns a ReactNode, renders an html element
 * @author @Kcaparas
 */


const MainPageLayout: FC<GeneralProps> = ({ isDarkMode }) => {
  // const [isOpen, setIsOpen] = useState<boolean>(true);
  // const navigate = useNavigate(); 
  // const sidebarItems: SidebarItemType[] = [
  //   {
  //     icon: <LayoutDashboard size={20} />,
  //     label: 'Dashboard',
  //     activePath: 'dashboard',
  //     onClick: () => {
  //       navigate('dashboard')
  //     }
  //   },
  //   {
  //     icon: <PlusCircle size={20} />,
  //     label: 'Add Task',
  //     activePath: 'addTasks',
  //     onClick: () => {
  //       navigate('addTasks')
  //     }
  //   }
  // ];

  
  return (
    <MainContainer>
      {/* <Sidebar 
        items={sidebarItems}
        isDarkMode={isDarkMode}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      /> */}
      <MainContent>
        <Suspense fallback={<LoadingSpinner isDarkMode={isDarkMode} />}>
          <Outlet context={{ isDarkMode }} />
        </Suspense>
        <Navigation isDarkMode={isDarkMode} />
      </MainContent>
    </MainContainer>
  );
  
};

export default MainPageLayout;
