import { useEffect, useState } from 'react';
import StyledApp from './StyledApp';
import Login from './Views/Auth/Components/Login';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : true;
  });

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  
  return (
    <StyledApp isDarkMode>
      <Login />
    </StyledApp>
  );
};

export default App;
