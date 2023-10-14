import React from 'react';
import {
  Table,
  TableContent,
  TableHead,
  TableItem,
  TableTitle,
} from './TransactionHistory.styles';

const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </TableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TableItem key={id}>
              <TableContent>{type}</TableContent>
              <TableContent>{amount}</TableContent>
              <TableContent>{currency}</TableContent>
            </TableItem>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TransactionHistory;
