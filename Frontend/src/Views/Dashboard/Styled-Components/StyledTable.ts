import styled from '@emotion/styled';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableHeader = styled.th`

  padding: 10px;
  border: 1px solid #ddd;
`;



const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
`;

export { Table, TableHeader, TableCell };
