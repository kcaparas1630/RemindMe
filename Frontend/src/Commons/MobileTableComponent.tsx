import { FC, ReactNode } from 'react';
import { MobileTableContainer } from './StyledCommons/StyledMobileTable';

interface MobileTableProps {
  content: ReactNode;
}

const MobileTableComponent: FC<MobileTableProps> = ({ content }) => {
  return <MobileTableContainer>{content}</MobileTableContainer>;
};

export default MobileTableComponent;
