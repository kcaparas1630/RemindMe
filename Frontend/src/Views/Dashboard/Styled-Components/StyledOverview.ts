import styled from '@emotion/styled';
import isDarkMode from '../../../Interface/General/isDarkMode';

const OverviewContainer = styled.div`
  width: 100%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    gap: 3rem;
  }
`;

const OverviewHeader = styled.h3<isDarkMode>`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${(props) => {
    return props.isDarkMode ? '#fff' : '#000';
  }};
  margin: 0;
`;

const OverviewGroup = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
    width: 90%;
    margin-left: 20px;
  }
`;

const OverviewItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OverviewItemHeader = styled.h4<isDarkMode>`
  font-size: 1rem;
  font-weight: 400;
  opacity: 0.7;
  color: ${(props) => {
    return props.isDarkMode ? '#fff' : '#B89A55';
  }};
  margin: 0;
`;

const OverviewItemContent = styled.p<isDarkMode>`
  font-size: 1.5rem;
  font-weight: 600;
  opacity: 0.7;
  color: ${(props) => {
    return props.isDarkMode ? '#fff' : '#000';
  }};
  margin: 0;
`;

const QuickActionsButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (min-width: 1024px) {
    width: 70%;
    align-items: center;
  }
`;

const QuickActionsButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export {
  OverviewContainer,
  OverviewHeader,
  OverviewGroup,
  OverviewItem,
  OverviewItemHeader,
  OverviewItemContent,
  QuickActionsButtonContainer,
  QuickActionsButtonGroup,
};
