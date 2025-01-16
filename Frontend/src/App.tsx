import { useEffect, useState } from 'react';
import StyledApp from './StyledApp';
import Login from './Views/Auth/Components/Login';
import Header from './Commons/Headers';
const App = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');
    return savedDarkMode !== null ? JSON.parse(savedDarkMode) : true;
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
  };

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  
  return (
    <StyledApp isDarkMode={isDarkMode}>
      <Login isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </StyledApp>
  );
};

export default App;
