import { FC, ReactNode } from 'react';
import { MobileTableContainer } from './StyledCommons/StyledMobileTable';

interface MobileTableProps {
  content: ReactNode;
}

const ReusableMobileTableComponent: FC<MobileTableProps> = ({ content }) => {
  return <MobileTableContainer>{content}</MobileTableContainer>;
};

export default ReusableMobileTableComponent;
