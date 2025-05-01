import { FC, ReactNode } from 'react';
import { TableContainer, Table as StyledTable, TableHead, TableRow, TableBody } from './StyledCommons/StyledTable';

interface TableProps {
    headerContent?: ReactNode;
    bodyContent?: ReactNode;
}

const Table: FC<TableProps> = ({ headerContent, bodyContent, ...props }) => {
    return (
        <TableContainer>
            <StyledTable {...props}>
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

export default Table;
