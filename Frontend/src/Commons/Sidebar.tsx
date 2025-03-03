import { FC, useState } from 'react';
import {
  HamburgerButton,
  Overlay,
  SidebarContainer,
  SidebarItem,
  LogoutButtonWrapper,
  ArrowIcon,
} from './StyledCommons/StyledSidebar';
import { Menu, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SidebarProps } from '../Interface/SidebarProps';
import Button from './Button';

const Sidebar: FC<SidebarProps> = ({ isDarkMode, items }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const activePathName = location.pathname.replace('/main/', '');
  return (
    <>
      <HamburgerButton
        onClick={toggleSidebar}
        isDarkMode={isDarkMode}
      >
        <Menu size={24} />
      </HamburgerButton>
      <ArrowIcon
        isDarkMode={isDarkMode}
        isOpen={isOpen}
        onClick={toggleSidebar}
      >
        {isOpen ? <ArrowLeft size={24} /> : <ArrowRight size={24} />}
      </ArrowIcon>
      <Overlay
        isOpen={isOpen}
        onClick={toggleSidebar}
      />

      <SidebarContainer
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0' : '-100%' }}
        transition={{ duration: 0.3 }}
        isOpen={isOpen}
        isDarkMode={isDarkMode}
      >
        {items.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              isDarkMode={isDarkMode}
              onClick={item.onClick}
              isActive={activePathName === item.activePath}
            >
              {item.icon}
              {item.label}
              {item.activePath === activePathName && <ArrowRight size={20} />}
            </SidebarItem>
          );
        })}
        <LogoutButtonWrapper>
          <Button
            type="button"
            name="Logout"
            disabled={false}
            isDarkMode={isDarkMode}
            handleClick={() => {
              localStorage.removeItem('loginToken');
              navigate('/login');
            }}
          >
            Logout
          </Button>
        </LogoutButtonWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
