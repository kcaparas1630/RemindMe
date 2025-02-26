/**
 * Main Function that is the child of Main.tsx
 * Includes Routing from authentication to Dashboard.
 *
 * @author @Kcaparas
 */
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import StyledApp from './StyledApp';
import Login from './Views/Auth/Components/Login';
import Register from './Views/Auth/Components/Register';
import MainPage from './Views/Dashboard/MainPage';
import Dashboard from './Views/Dashboard/Dashboard';
import AddTasks from './Views/Dashboard/AddTasks';
import ProtectedRoute from './ProtectedRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'motion/react';
import Header from './Commons/Headers';

const queryClient = new QueryClient();

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = ({
  isDarkMode,
  toggleTheme,
  isAuthenticated,
}: {
  isDarkMode: boolean;
  toggleTheme: () => void;
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
          element={
            <Login
              isDarkMode={isDarkMode}
            />
          }
        />
        <Route
          path="/register"
          element={
            <Register
              isDarkMode={isDarkMode}
            />
          }
        />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route
            path="/main"
            element={
              <PageWrapper>
                <MainPage
                  isDarkMode={isDarkMode}
                  toggleTheme={toggleTheme}
                />
              </PageWrapper>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PageWrapper>
                <Dashboard
                  isDarkMode={isDarkMode}
                  toggleTheme={toggleTheme}
                />
              </PageWrapper>
            }
          />
          <Route
            path="/addTasks"
            element={
              <PageWrapper>
                <AddTasks
                  isDarkMode={isDarkMode}
                  toggleTheme={toggleTheme}
                />
              </PageWrapper>
            }
          />
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
            toggleTheme={toggleTheme}
            isAuthenticated={isAuthenticated}
          />
        </StyledApp>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
