import { FC, ReactNode } from 'react';
import { TableContainer, Table as StyledTable, TableHead, TableRow, TableBody } from './StyledCommons/StyledDesktopTable';
import { MobileTableContainer } from './StyledCommons/StyledMobileTable';
import TableLayout from '../types/ViewLayoutTypes';

// Table Props
interface TableProps {
    headerContent?: ReactNode;
    bodyContent?: ReactNode;
    layout: TableLayout;
}

const Table: FC<TableProps> = ({ headerContent, bodyContent, layout }) => {
    return (
        layout === 'desktop' ? (
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
        ) : layout === 'mobile' ? (
            <MobileTableContainer>{bodyContent}</MobileTableContainer>
        ) : <div>Invalid Layout. Only 'desktop' or 'mobile' are allowed.</div>
    );
};

export default Table;
