import styled from '@emotion/styled';

const MainContainer = styled.main`
  width: 100%;
  min-height: calc(100vh - 50px); // minus header height
  display: flex;
  padding-bottom: 24px;

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
    margin-left: auto;
  }
`;

const DashboardHeader2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-top: 5rem;
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

export { MainContainer, MainContent, DashboardHeader2, NoTasksContainer, NoTasksText, ButtonContainer };
