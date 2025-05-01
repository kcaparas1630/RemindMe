import styled from '@emotion/styled';

const MobileTableContainer = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const MobileTable = styled.table`
  width: 100%;
`;

const MobileTableHead = styled.thead`
  display: table-header-group;
`;

const MobileTableBody = styled.tbody`
  width: 100%;
`;

const MobileTableRow = styled.tr`
  display: table-row;
  border: 1px solid #ddd;
`;

const MobileTableCell = styled.td`
  display: table-cell;
  text-align: right;
`;

const MobileTableCellHeader = styled.th`
  text-align: left;
  font-weight: bold;
  vertical-align: middle;

  @media (min-width: 769px) {
    display: table-cell;
  }
`;

export { MobileTableContainer, MobileTable, MobileTableHead, MobileTableBody, MobileTableRow, MobileTableCell, MobileTableCellHeader };
