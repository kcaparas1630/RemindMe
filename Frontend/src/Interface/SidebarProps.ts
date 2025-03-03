import { JSX } from "react";
import GeneralProps from "../Interface/General/GeneralProps";

export interface SidebarItemType {
    icon: JSX.Element;
    label: string;
    onClick: () => void;
    activePath: string;
  }
  
  export interface SidebarProps extends GeneralProps {
    items: SidebarItemType[];
  }
