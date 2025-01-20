import styled from '@emotion/styled';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div<{ isDarkMode: boolean }>`
  background-color: ${props => {
    return props.isDarkMode ? '#2C2F33' : '#FFFFFF'
  }};
  color: ${props => {
    return props.isDarkMode ? '#DEE2E6' : '#212529'
  }};
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  max-width: 400px;
`;

export { ModalOverlay, ModalContent };
