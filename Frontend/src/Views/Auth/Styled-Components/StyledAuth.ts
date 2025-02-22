import styled from '@emotion/styled';
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';

const Container = styled.section`
  label: ContainerWrapper;
  display: flex;
  width: 100%;
  height: 95vh;
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

const BannerContainer = styled(motion.div)`
  display: flex;
  width: 100%;
  height: 20%;
  border-radius: 50px;
  position: relative;
  background-color: ${({ theme }) => {
    return theme.isDarkMode ? '#22333b' : '#E9ECEF';
  }};
  order: 1;
  @media (min-width: 1024px) {
    order: 0;
    width: 30%;
    height: 100%;
    border-radius: 0 0 80% 0;
  }
`;

const BannerImage = styled.img`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    width: 70%;
    height: 70%;
    object-fit: cover;
    position: absolute;
    top: 75%;
    left: 55%;
    transform: translate(-50%, -50%);
    filter: drop-shadow(0 20px 10px rgba(0, 0, 0, 0.2));
  }
`;

const BannerTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25% 0 0 30%;
  gap: 24px;
`;

const BannerTitle = styled.h2`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    color: ${({ theme }) => {
      return theme.isDarkMode ? '#DEE2E6' : '#212529'
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

const FormHolderContainer = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  order: 0;
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

export { Container, RouterText, BannerContainer, FormHolderContainer, BannerImage, BannerTitle, BannerText, BannerTextContainer };
