import { FC } from 'react';
import { Container, LoginFormContainer } from '../Styled-Components/StyledLogin';
import InputField from '../../../Commons/InputFields';
import Button from '../../../Commons/Button';

const Login: FC = () => {
  
  const handleClick  = () => {
    console.log('clicked'); // for now
  };
  return (
    <Container>
      <LoginFormContainer>
        <h1>Task Dashboard Login</h1>
        <InputField type='text' inputName='Username' placeholder='Enter your Username' />
        <InputField type='password' inputName='Password' placeholder='Enter your Password' />
        <Button type='submit' name='Submit' onClick={handleClick} />
      </LoginFormContainer>
    </Container>
  );
};

export default Login;
