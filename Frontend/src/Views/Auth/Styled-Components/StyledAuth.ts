import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


const Container = styled.section`
  label: ContainerWrapper;
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

// it's under ThemeProvider so theme props works. It's also defined in @emotion.d.ts
const RouterText = styled(NavLink)`
  font-size: 1rem;
  color: ${({ theme }) => {
    return theme.isDarkMode ? '#DEE2E6' : '#333333'
  }};
  text-align: right;
  padding: 0;
  margin: 0;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

export { Container, RouterText };
