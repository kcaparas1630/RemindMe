import { ModalOverlay, ModalContent } from './StyledCommons/StyledModal';
import { FC } from 'react';
interface ModalProps {
  isOpen: boolean;
  message: string;
  isDarkMode: boolean;
}




const Modal: FC<ModalProps> = ({ isOpen, message, isDarkMode }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent isDarkMode={isDarkMode}>
        {message}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal; 
