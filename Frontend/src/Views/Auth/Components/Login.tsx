import React, { FC, useState } from 'react';
import { Container, LoginFormContainer } from '../Styled-Components/StyledLogin';
import InputField from '../../../Commons/InputFields';
import Button from '../../../Commons/Button';
import Header from '../../../Commons/Headers';

interface LoginProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Login: FC<LoginProps> = ({ isDarkMode, toggleTheme }) => {
  const [userName, setUsername] = useState<string>('');
  const [userPassword, setUserPassword] = useState<string>('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPassword(e.target.value);
  }
  const handleClick = () => {
    console.log('username: ', userName);
    console.log('password: ', userPassword);
  };

  return (
    <>
    <Header
        themeMode={isDarkMode ? 'dark' : 'light'}
        toggleTheme={toggleTheme}
      />
      <Container>
      <LoginFormContainer isDarkMode={isDarkMode}>
        <h1>Task Dashboard Login</h1>
        <InputField
          type="text"
          inputName="Username"
          placeholder="Enter your Username"
          value={userName}
          onChange={handleUsernameChange}
        />
        <InputField
          type="password"
          inputName="Password"
          placeholder="Enter your Password"
          value={userPassword}
          onChange={handlePasswordChange}
        />
        <Button
          type="submit"
          name="Submit"
          onClick={handleClick}
          isDarkMode={isDarkMode}
        />
      </LoginFormContainer>
    </Container>
    </>
  );
};

export default Login;
