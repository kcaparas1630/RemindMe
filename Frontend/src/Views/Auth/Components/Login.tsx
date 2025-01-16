import { FC } from 'react';
import { Container, LoginFormContainer } from '../Styled-Components/StyledLogin';
import InputField from '../../../Commons/InputFields';
import Button from '../../../Commons/Button';
import Header from '../../../Commons/Headers';

interface LoginProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Login: FC<LoginProps> = ({ isDarkMode, toggleTheme }) => {
  const handleClick = () => {
    console.log('clicked'); // for now
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
        />
        <InputField
          type="password"
          inputName="Password"
          placeholder="Enter your Password"
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
