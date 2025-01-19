import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import StyledApp from './StyledApp';
import Login from './Views/Auth/Components/Login';
import Register from './Views/Auth/Components/Register';

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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path='/login' element={<Login isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
          <Route path='/register' element={<Register isDarkMode={isDarkMode} toggleTheme={toggleTheme} />} />
        </Routes>
      </BrowserRouter>
    </StyledApp>
  );
};

export default App;
