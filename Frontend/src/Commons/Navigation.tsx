import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  NavigationContainer, 
  NavigationItem, 
  NavigationLabel, 
  ActiveIndicator 
} from './StyledCommons/StyledNavigation';
import { Home, ListTodo, User } from 'lucide-react';

interface NavigationProps {
  isDarkMode?: boolean;
}

/**
 * Floating Navigation component that appears at the bottom of the screen
 * @param isDarkMode - Theme state to control dark/light mode styling
 * @returns A React component displaying a bottom navigation bar
 */
const Navigation: React.FC<NavigationProps> = ({ isDarkMode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  // Navigation items with their icons, labels, and paths
  const navigationItems = [
    { 
      icon: <Home size={24} />, 
      label: 'Home', 
      path: '/main/dashboard' 
    },
    { 
      icon: <ListTodo size={24} />, 
      label: 'Tasks', 
      path: '/main/addTasks' 
    },
    { 
      icon: <User size={24} />, 
      label: 'Profile', 
      path: '/main/profile' 
    }
  ];

  return (
    <NavigationContainer isDarkMode={isDarkMode}>
      {navigationItems.map((item, index) => {
        const isActive = currentPath === item.path;
        
        return (
          <NavigationItem 
            key={index} 
            isActive={isActive}
            isDarkMode={isDarkMode}
            onClick={() => {
              navigate(item.path);
            }}
          >
            {item.icon}
            <NavigationLabel isActive={isActive}>
              {item.label}
            </NavigationLabel>
            {isActive && <ActiveIndicator />}
          </NavigationItem>
        );
      })}
    </NavigationContainer>
  );
};

export default Navigation; 
