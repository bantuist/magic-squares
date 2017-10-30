import React from 'react';
import styled from 'styled-components';

const Cell = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Rows = styled.div`
  font-size: 1.5em;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`;
const Total = styled.span`
  color: ${({ isCorrectTotal }) => isCorrectTotal ? '#7AE582' : '#FF5A5F'};
`;

const RowTotals = ({ rows, onCorrectTotal }) => {
  const rowTotals = Object.keys(rows).map(key => {
    const total = rows[key];

    return (
      <Cell key={key} className="total">
        <Total isCorrectTotal={onCorrectTotal(total)}>{total ? total : '' }</Total>
      </Cell>
    );
  });

  return (<Rows>{rowTotals}</Rows>);
};

export default RowTotals;