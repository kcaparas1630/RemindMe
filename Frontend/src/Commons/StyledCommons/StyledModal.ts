import styled from '@emotion/styled';

const ModalOverlay = styled.div<{ isOpen: boolean }>`
  display: ${(props) => {
    if (props.isOpen) {
      return 'block';
    } else {
      return 'none';
    }
  }};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const ModalContent = styled.div<{ isDarkMode: boolean }>`
  background-color: ${(props) => {
    return props.isDarkMode ? '#2C2F33' : '#FFFFFF';
  }};
  color: ${(props) => {
    return props.isDarkMode ? '#DEE2E6' : '#212529';
  }};
  padding: 2rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  max-width: 95vw;
  max-height: 90vh;
  box-sizing: border-box;
  overflow: auto;
`;

export { ModalOverlay, ModalContent, ModalContentWrapper };
