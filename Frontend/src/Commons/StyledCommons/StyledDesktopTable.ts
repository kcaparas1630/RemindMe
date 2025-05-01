import styled from '@emotion/styled';

// Container to handle the table display
const TableContainer = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0;
`;

const TableHead = styled.thead`
  display: table-header-group;
`;

const TableBody = styled.tbody`
  width: 100%;
`;

const TableRow = styled.tr`
  display: table-row;
  border: 1px solid #ddd;
`;

const TableHeader = styled.th`
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
  font-weight: bold;
  vertical-align: middle;

  @media (min-width: 769px) {
    display: table-cell;
  }
`;

const TableCell = styled.td`
  padding: 12px 15px;
  border: 1px solid #ddd;
  text-align: left;
  vertical-align: middle;
  
  &:before {
    content: none;
  }
`;

const TableCellPriority = styled.div<{ priority: 'LOW' | 'MEDIUM' | 'HIGH' }>`
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 25px;
  text-align: center;
  width: 60%;
  height: 60%;
  background-color: ${({ priority }) => {
    switch (priority) {
      case 'HIGH':
        return '#ff4444';
      case 'MEDIUM':
        return '#ffd700';
      default:
        return '#4caf50';
    }
  }};
  color: ${({ priority }) => {
    switch (priority) {
      case 'HIGH':
        return '#ffffff';
      case 'MEDIUM':
        return '#000000';
      default:
        return '#ffffff';
    }
  }};
  font-weight: bold;  
  vertical-align: middle;

  @media (min-width: 1024px) {
    width: 50%;
    height: 50%;
  }
`;

const TableCellActionsGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export { TableContainer, Table, TableHead, TableBody, TableRow, TableHeader, TableCell, TableCellPriority, TableCellActionsGroup };
