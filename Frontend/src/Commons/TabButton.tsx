import { FC, ReactNode } from 'react';
import isDarkMode from '../Interface/General/isDarkMode';
import StyledTabButton from './StyledCommons/StyledTabButton';
interface TabButtonProps extends isDarkMode {
    /** The tab's unique identifier */
    id: string;
    /** The tab's label */
    label?: string;
    /** Content of the tab button */
    children?: ReactNode;
    /** The tab's active state */
    isActive: boolean;
    /** ID of the panel this tab controls */
    controls: string;
    /** The tab's click handler */
    onClick: () => void;
}


const TabButton: FC<TabButtonProps> = ({ id, label, children, isActive, controls, isDarkMode, onClick }) => {
    return (
        <StyledTabButton
        id={id}
        role="tab"
        aria-selected={isActive}
        aria-controls={controls}
        tabIndex={isActive ? 0 : -1}
        isDarkMode={isDarkMode}
        isActive={isActive}
        onClick={onClick}
        type="button"
      >
        {children || label}
      </StyledTabButton>
    )
}

export default TabButton;
