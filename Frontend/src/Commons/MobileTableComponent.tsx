import { FC, ReactNode } from 'react';
import { MobileTableContainer, MobileTable, MobileTableHead, MobileTableBody, MobileTableRow, MobileTableCell, MobileTableCellHeader } from './StyledCommons/StyledMobileTable';

interface MobileTableProps {
    headerContent?: ReactNode;
    bodyContent?: ReactNode;
}

const MobileTableComponent: FC = () => {
    return (
        <MobileTableContainer>
            <MobileTable>
                <MobileTableRow>
                    <MobileTableCellHeader>Task Name</MobileTableCellHeader>
                    <MobileTableCell>Something</MobileTableCell>
                </MobileTableRow>
            </MobileTable>
        </MobileTableContainer>
    )
}

export default MobileTableComponent;
