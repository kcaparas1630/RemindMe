import styled from '@emotion/styled';

// Container to handle the table display
const TableContainer = styled.div`
  width: 100%;
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

export { TableContainer, Table, TableHead, TableBody, TableRow, TableHeader, TableCell };
