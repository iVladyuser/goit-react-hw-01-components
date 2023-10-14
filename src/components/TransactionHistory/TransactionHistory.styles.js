import styled from 'styled-components';

export const Table = styled.table`
  overflow: hidden;
  width: 600px;
  border-radius: 4px;
  margin: 50px auto;
border: 5px solid#f5deb3;
  background: #f5deb3;
  box-shadow: rgb(32 32 32) 0 0px 10px 2px;
`;

export const TableHead = styled.thead`

  font-size: 18px;
  font-weight: bold;
  text-align: center;
  border-radius: 4px 4px 0 0;

`;

export const TableTitle = styled.th`
padding: 12px 20px 12px;
  text-align: center;
`;

export const TableItem = styled.tr`
  background-color: #E6E6FF;
  &:nth-child(2n) {
    background-color: #bda3d9;
  }
`;

export const TableContent = styled.td`
padding: 10px 20px 10px;
  text-align: center;
`;
