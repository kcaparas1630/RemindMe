import styled from '@emotion/styled';

const QuickActionsContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;
  border-radius: 8px;

  .CircularProgressbar {
    width: 80%;
    height: 80%;
  }

  @media (min-width: 1024px) {
    width: 30%;
    height: 40%;
    padding: 20px;
    display: flex;
  }
`;

export { QuickActionsContainer };
