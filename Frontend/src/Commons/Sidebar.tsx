import { FC, useState, JSX } from 'react';
import {
  HamburgerButton,
  Overlay,
  SidebarContainer,
  SidebarItem,
} from './StyledCommons/StyledSidebar';
import { Menu } from 'lucide-react';
import GeneralProps from '../Interface/General/GeneralProps';
import { useLocation } from 'react-router-dom';

interface SidebarProps extends GeneralProps {
  items: {
    icon: JSX.Element;
    label: string;
    onClick: () => void;
  }[];
  activePath: string;
}

const Sidebar: FC<SidebarProps> = ({ isDarkMode, items }) => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const activePath = location.pathname.replace('/main/', '');
  console.log(activePath);
  return (
    <>
      <HamburgerButton
        onClick={toggleSidebar}
        isDarkMode={isDarkMode}
      >
        <Menu size={24} />
      </HamburgerButton>

      <Overlay
        isOpen={isOpen}
        onClick={toggleSidebar}
      />

      <SidebarContainer
        isOpen={isOpen}
        isDarkMode={isDarkMode}
      >
        {items.map((item, index) => {
          return (
            <SidebarItem
              key={index}
              isDarkMode={isDarkMode}
              onClick={item.onClick}
              isActive={activePath === item.activePath}
            >
              {item.icon}
              {item.label}
            </SidebarItem>
          );
        })}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
