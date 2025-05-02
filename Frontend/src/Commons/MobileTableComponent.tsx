import { FC, ReactNode } from 'react';
import { MobileTableContainer, DataRow } from './StyledCommons/StyledMobileTable';

interface MobileTableProps {
    content: ReactNode
}

const MobileTableComponent: FC<MobileTableProps> = ({ content }) => {
    return (
        <MobileTableContainer>
            <DataRow>
                {content}
            </DataRow>
        </MobileTableContainer>
    )
}

export default MobileTableComponent;
