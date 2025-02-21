import { FC, useState, JSX } from 'react';
import { HamburgerButton, Overlay, SidebarContainer, SidebarItem } from './StyledCommons/StyledSidebar';
import { Menu } from 'lucide-react';
import GeneralProps from '../Interface/General/GeneralProps';

interface SidebarProps extends GeneralProps {
  items: {
    icon: JSX.Element;
    label: string;
    onClick: () => void;
  }[];
}

const Sidebar: FC<SidebarProps> = ({ isDarkMode, items }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <HamburgerButton onClick={toggleSidebar} isDarkMode={isDarkMode}>
        <Menu size={24} />
      </HamburgerButton>

      <Overlay isOpen={isOpen} onClick={toggleSidebar} />
      
      <SidebarContainer isOpen={isOpen} isDarkMode={isDarkMode}>
        {items.map((item, index) => {
            return (
                <SidebarItem 
                    key={index}
            isDarkMode={isDarkMode}
            onClick={item.onClick}
          >
            {item.icon}
            {item.label}
          </SidebarItem>
        )})}
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
