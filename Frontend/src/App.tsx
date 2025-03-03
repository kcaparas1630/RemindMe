/**
 * Main Function that is the child of Main.tsx
 * Includes Routing from authentication to Dashboard.
 *
 * @author @Kcaparas
 */
import { useEffect, useState, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import StyledApp from './StyledApp';
import Login from './Views/Auth/Components/Login';
import Register from './Views/Auth/Components/Register';
import ProtectedRoute from './ProtectedRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence } from 'motion/react';
import Header from './Commons/Headers';

const queryClient = new QueryClient();

const MainPageLayout = lazy(() => {
  return import('./Views/Dashboard/MainPage');
});
const Dashboard = lazy(() => {
  return import('./Views/Dashboard/Dashboard');
});
const AddTasks = lazy(() => {
  return import('./Views/Dashboard/AddTasks');
});


const AnimatedRoutes = ({
  isDarkMode,
  isAuthenticated,
}: {
  isDarkMode: boolean;
  isAuthenticated: boolean;
}) => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}
      >
        <Route
          path="/"
          element={
            <Navigate
              to="/login"
              replace
            />
          }
        />
        <Route
          path="/login"
          element={<Login isDarkMode={isDarkMode} />}
        />
        <Route
          path="/register"
          element={<Register isDarkMode={isDarkMode} />}
        />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/main" element={<MainPageLayout isDarkMode={isDarkMode} />}>
            <Route
              path="dashboard"
              element={<Dashboard isDarkMode={isDarkMode} />}
            />
            <Route
              path="addTasks"
              element={<AddTasks isDarkMode={isDarkMode} />}
            />
          </Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  // Will create a localStorage custom hook.
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const savedDarkMode = localStorage.getItem('isDarkMode');

    return savedDarkMode !== null && savedDarkMode !== '';
  });
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    const savedLoginToken = localStorage.getItem('loginToken');
    return savedLoginToken !== null && savedLoginToken !== '';
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', JSON.stringify(!isDarkMode));
  };

  // check for token frequently and sets the value given.
  useEffect(() => {
    const token = localStorage.getItem('loginToken');
    setIsAuthenticated(token !== null && token !== '');
  }, []);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <StyledApp isDarkMode={isDarkMode}>
          <Header
            isDarkMode={isDarkMode}
            toggleTheme={toggleTheme}
          />
          <AnimatedRoutes
            isDarkMode={isDarkMode}
            isAuthenticated={isAuthenticated}
          />
        </StyledApp>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
