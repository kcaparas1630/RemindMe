import styled from '@emotion/styled';
import isDarkMode from '../../../Interface/General/isDarkMode';
import { motion } from "motion/react"

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  height: 100vh;
  justify-content: center;
`;

const WelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const WelcomeTitle = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 2.25rem;
  margin: 0;
`;

const Card = styled.div<isDarkMode>`
   background-color: ${(props) => {
    return props.isDarkMode ? '#2C2F33' : '#E9ECEF';
  }};
  color: ${(props) => {
    return props.isDarkMode ? '#DEE2E6' : '#212529';
  }};
  border-radius: 0.5rem;
  border: 1px solid #e5e7eb;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const EmptyStateContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 0;
`;

const EmptyStateText = styled.p<isDarkMode>`
  font-size: 1.125rem;
  color: ${(props) => {
    return props.isDarkMode ? '#f8f9fa' : '#212529';
  }};
  margin: 0;
`;

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const TasksTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const TaskBullet = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background-color: #3b82f6;
  margin-right: 0.75rem;
`;

const TaskText = styled.p`
  margin: 0;
`;

const QuickActionsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ActionsTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0;
`;

const ActionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const MotionWrapper = styled.div`
  width: 100%;
`;

const ActionButton = styled.button<isDarkMode>`
 background-color: ${(props) => {
    return props.isDarkMode ? '#264653' : '#E9ECEF';
  }};
  color: ${(props) => {
    return props.isDarkMode ? '#f8f9fa' : '#212529';
  }};
  border: 1px solid #e5e7eb;
  border-radius: 0.375rem;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 1rem;
  width: 100%;

  &:hover {
    background-color: ${(props) => {
      return props.isDarkMode ? '#2A9D8F' : '#D3D3D3';
    }};
  }

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }
`;

export {
  Container,
  WelcomeSection,
  WelcomeTitle,
  MotionWrapper,
  EmptyStateContainer,
  Card,
  EmptyStateText,
  TaskBullet,
  TaskItem,
  TaskText,
  TasksContainer,
  TasksList,
  TasksTitle,
  QuickActionsSection,
  ActionButton,
  ActionsGrid,
  ActionsTitle,
};
