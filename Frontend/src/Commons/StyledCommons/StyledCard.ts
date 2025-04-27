import styled from '@emotion/styled';

const CardLayoutContainer = styled.div<{ isDarkMode: boolean }>`
  width: 100%;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    return props.isDarkMode ? '#2a2a2a;' : '#edede9';
  }};
  color: ${(props) => {
    return props.isDarkMode ? '#DEE2E6' : '#212529';
  }};
  border-radius: 8px;

  @media (min-width: 1024px) {
    width: 30%;
    min-height: 400px;
  }
`;

const CardLayoutHeader = styled.div<{ isDarkMode: boolean }>`
  width: 100%;
  height: 40%;
  min-height: 40px;
  display: flex;
  border-bottom: 1px solid #ced4da;
  position: relative;

  @media (min-width: 1024px) {
    height: 10%;
  }
`;

const CardLayoutTitle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const CardLayoutTitleText = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  position: absolute;
  margin: 0;
  top: 10%;
  left: 3%;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
    top: 10%;
    left: 3%;
  }
`;

const CardLayoutRightItem = styled.div`
  font-size: 0.8rem;
  font-weight: 400;
  position: absolute;
  margin: 0;
  top: 50%;
  transform: translateY(-50%);
  right: 3%;
  width: auto;

  @media (min-width: 1024px) {
    font-size: 1rem;
    right: 3%;
  }
`;

const CardLayoutRightItemButton = styled.button<{ isDarkMode: boolean }>`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  color: ${(props) => {
    return props.isDarkMode ? '#DEE2E6' : '#212529'
  }};
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    color: ${(props) => {
      return props.isDarkMode ? '#2A9D8F' : '#D3D3D3';
    }}
  }
`;

const CardLayoutContent = styled.div`
  width: 100%;
  height: 60%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  .CircularProgressbar {
    width: 80%;
    height: 80%;
  }
`;

export {
  CardLayoutContainer,
  CardLayoutHeader,
  CardLayoutTitle,
  CardLayoutTitleText,
  CardLayoutRightItem,
  CardLayoutRightItemButton,
  CardLayoutContent,
};
