import { ModalOverlay, ModalContent, ModalContentWrapper } from './StyledCommons/StyledModal';
import { FC } from 'react';
import ModalProps from '../Interface/General/ModalProps';


const Modal: FC<ModalProps> = ({ isOpen, children, isDarkMode, setIsOpen }) => {
  if (!isOpen) return null;
  const handleClose = () => {
    if (setIsOpen) {
      setIsOpen(false);
    }
  };
  return (
    <ModalOverlay isOpen={isOpen} onClick={handleClose}>
      <ModalContentWrapper>
        <ModalContent isDarkMode={isDarkMode}>
          {children}
        </ModalContent>
      </ModalContentWrapper>
    </ModalOverlay>
  );
};

export default Modal; 
