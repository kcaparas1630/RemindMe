import { FC, ReactNode } from 'react';
import { TableContainer, Table as StyledTable, TableHead, TableRow, TableBody } from './StyledCommons/StyledDesktopTable';

interface DesktopTableProps {
    headerContent?: ReactNode;
    bodyContent?: ReactNode;
}

const DesktopTable: FC<DesktopTableProps> = ({ headerContent, bodyContent }) => {
    return (
        <TableContainer>
            <StyledTable>
                <TableHead>
                    <TableRow>
                        {headerContent}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bodyContent}
                </TableBody>
            </StyledTable>
        </TableContainer>
    );
};

export default DesktopTable;
