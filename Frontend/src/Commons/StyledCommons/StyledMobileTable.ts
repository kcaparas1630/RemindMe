import styled from '@emotion/styled';

const MobileTableContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;

const DataRow = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
  gap: 8rem;
`

const DataCellHeader = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: left;
  margin: 0;
`;

const DataCell = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  text-align: right;
  margin: 0;
`;

const DataCellActions = styled.div`
  display: flex;
  gap: 1rem;
`;

export { MobileTableContainer, DataRow, DataCellHeader, DataCell, DataCellActions };
