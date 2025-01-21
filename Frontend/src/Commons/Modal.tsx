import { ModalOverlay, ModalContent } from './StyledCommons/StyledModal';
import { FC } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ModalProps {
  isOpen: boolean;
  message: string;
  isDarkMode: boolean;
  isLoading?: boolean;
}

const Modal: FC<ModalProps> = ({ isOpen, message, isDarkMode, isLoading = false }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent isDarkMode={isDarkMode}>
        {isLoading && <LoadingSpinner isDarkMode={isDarkMode} />}
        {message}
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal; 
