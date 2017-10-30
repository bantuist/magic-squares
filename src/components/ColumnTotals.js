import React from 'react';
import styled from 'styled-components';

const Cell = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Columns = styled.div`
  font-size: 1.5em;
  grid-column: 1/4;
  display: flex;
  flex-direction: row;
`;
const Total = styled.span`
  color: ${({ isCorrectTotal }) => isCorrectTotal ? '#7AE582' : '#FF5A5F'};
`;

const ColumnTotals = ({ columns, diagonals, onCorrectTotal }) => {
  const columnTotals = Object.keys(columns).map(key => {
    const total = columns[key];

    return (
      <Cell key={key} className="total">
        <Total isCorrectTotal={onCorrectTotal(total)}>{total ? total : '' }</Total>
      </Cell>
    );
  });

  const d1Total = diagonals[0];
  const d2Total = diagonals[1];

  return (
    <Columns>
      <Cell>
        <Total isCorrectTotal={onCorrectTotal(diagonals[0])}>{d1Total ? d1Total : '' }</Total>
      </Cell>
      {columnTotals}
      <Cell>
        <Total isCorrectTotal={onCorrectTotal(diagonals[1])}>{d2Total ? d2Total : '' }</Total>
      </Cell>
    </Columns>
  );
};

export default ColumnTotals;