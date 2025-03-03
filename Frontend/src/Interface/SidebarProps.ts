import { JSX, Dispatch, SetStateAction } from "react";
import GeneralProps from "../Interface/General/GeneralProps";

export interface SidebarItemType {
    icon: JSX.Element;
    label: string;
    onClick: () => void;
    activePath: string;
  }
  
  export interface SidebarProps extends GeneralProps {
    items: SidebarItemType[];
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }
