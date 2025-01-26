import isDarkMode from "./isDarkMode";

interface ModalProps extends isDarkMode {
  isOpen: boolean;
  message: string;
  isLoading?: boolean;
}

export default ModalProps;
