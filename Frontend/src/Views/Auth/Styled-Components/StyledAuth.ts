import styled from '@emotion/styled';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';

const Container = styled.section`
  label: ContainerWrapper;
  display: flex;
  width: 100%;
  height: calc(100vh - 52px);
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: start;
    align-items: start;
    overflow: hidden;
  }
`;

const BannerContainer = styled(motion.div)<{ view: string }>`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    // 001524, 000814
    background-color: ${({ theme }) => {
      return theme.isDarkMode ? '#0d1b2a' : '#E9ECEF';
    }};
    width: 50%;
    height: 100%;
  }
`;

const NavigationText = styled.p`
  display: flex;
  font-size: 1.2rem;
  margin: 0;
  font-weight: 400;
  color: ${({ theme }) => {
    return theme.isDarkMode ? '#f8f9fa' : '#212529';
  }};
`;
const FormHolderContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    margin: 0;
    width: 50%;
    justify-content: center;
    align-items: center;
  }
`;

const FormHeader1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  margin: 0;
  color: ${({ theme }) => {
    return theme.isDarkMode ? '#f8f9fa' : '#212529';
  }};
`;

// it's under ThemeProvider so theme props works. It's also defined in @emotion.d.ts
const RouterText = styled(NavLink)`
  font-size: 1.2rem;
  color: ${({ theme }) => {
    return theme.isDarkMode ? '#264653' : '#e76f51';
  }};
  text-align: right;
  padding: 0;
  margin: 0;
  text-decoration: underline;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  Container,
  RouterText,
  BannerContainer,
  FormHolderContainer,
  NavigationText,
  FormHeader1,
};
