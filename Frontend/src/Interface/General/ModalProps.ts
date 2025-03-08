import isDarkMode from "./isDarkMode";
import React from "react";

interface ModalProps extends isDarkMode {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  isLoading?: boolean;
}

export default ModalProps;
