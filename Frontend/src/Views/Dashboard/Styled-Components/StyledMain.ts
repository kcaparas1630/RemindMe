import styled from '@emotion/styled';
import { motion } from 'motion/react';

const MainContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - 50px); // minus header height
  display: flex;
  padding-bottom: 24px;

  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

const MainContent = styled(motion.div)<{ isOpen: boolean }>`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 24px;
  gap: 24px;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: ${(props) => {
      return props.isOpen ? '80%' : '100%';
    }};
    height: 100%;
    transition: all 0.3s ease-in-out;
    margin-left: auto;
    transform: translateX(
      ${(props) => {
        return props.isOpen ? '0' : '20%';
      }}
    );
  }
`;

const DashboardHeader1 = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 5rem;
`;

const CardRowContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const NoTasksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NoTasksText = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

export { MainContainer, MainContent, DashboardHeader1, CardRowContainer, NoTasksContainer, NoTasksText };
