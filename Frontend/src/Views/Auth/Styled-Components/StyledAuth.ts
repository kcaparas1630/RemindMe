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
    background-color: ${({ theme }) => {
      return theme.isDarkMode ? '#22333b' : '#E9ECEF';
    }};
    width: 50%;
    height: 100%;
  }
`;

const BannerImage = styled.img<{ view: string }>`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    width: 70%;
    height: 70%;
    object-fit: cover;
    filter: drop-shadow(0 20px 10px rgba(0, 0, 0, 0.2));
  }
`;

const BannerTextContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 5% 0;

  @media (min-width: 1024px) {
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
    margin: 25% 0 0 20%;
    gap: 24px;
    padding-right: 10%;
    justify-content: start;
  }
`;

const BannerTitle = styled.h2`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => {
      return theme.isDarkMode ? '#DEE2E6' : '#212529';
    }};
  }
`;

const BannerText = styled.p`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    font-size: 1.5rem;
    margin: 0;
    font-weight: 400;
    color: ${({ theme }) => {
      return theme.isDarkMode ? '#DEE2E6' : '#333333';
    }};
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 30%;

  @media (min-width: 1024px) {
    width: 100%;
    height: auto;
  }
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

// it's under ThemeProvider so theme props works. It's also defined in @emotion.d.ts
const RouterText = styled(NavLink)`
  font-size: 1rem;
  color: ${({ theme }) => {
    return theme.isDarkMode ? '#DEE2E6' : '#333333';
  }};
  text-align: right;
  padding: 0;
  margin: 0;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export {
  Container,
  RouterText,
  BannerContainer,
  FormHolderContainer,
  BannerImage,
  BannerTitle,
  BannerText,
  BannerTextContainer,
  ButtonContainer,
};
