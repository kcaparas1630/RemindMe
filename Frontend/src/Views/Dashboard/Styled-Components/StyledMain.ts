import styled from '@emotion/styled';
import isDarkMode from '../../../Interface/General/isDarkMode';
const MainContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - 51px); // minus header height
  display: flex;
  // padding-bottom: 24px;

  @media (min-width: 1024px) {
    padding-bottom: 0;
  }
`;

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 0 24px;
  gap: 24px;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    margin-left: 15%;
  }
`;

const DashboardHeader2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin: 5rem 0 0 0;
`;

const DashboardHeaderGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const DashboardHeaderText = styled.p<isDarkMode>`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  color: ${(props) => {
    return props.isDarkMode ? '#fff' : '#B89A55';
  }};
`;

const NoTasksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const ButtonContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const NoTasksText = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`;

export {
  MainContainer,
  MainContent,
  DashboardHeader2,
  DashboardHeaderGroup,
  DashboardHeaderText,
  NoTasksContainer,
  NoTasksText,
  ButtonContainer,
};
