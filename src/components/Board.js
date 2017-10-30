import React from 'react';
import Cells from './Cells';
import RowTotals from './RowTotals';
import ColumnTotals from './ColumnTotals';
import styled from 'styled-components';

const Container = styled.div`
  height: ${({ gridSize }) => (gridSize * 100) + 100 }px;
  width: ${({ gridSize }) => (gridSize * 100) + 200 }px;
  display: grid;
  grid-template-columns: 1fr ${({ gridSize }) => gridSize }fr 1fr;
  grid-template-rows: 3fr 1fr;
`;

const Board = ({ gridSize, grid, totals, onIsCorrectTotal, onUpdateGrid }) => {
  const { columns, rows, diagonals } = totals;
  
  return (
    <Container gridSize={gridSize}> 
      <Cells gridSize={gridSize} grid={grid} onUpdateGrid={onUpdateGrid} />
      <RowTotals rows={rows} onIsCorrectTotal={onIsCorrectTotal} />
      <ColumnTotals 
        columns={columns} 
        diagonals={diagonals} 
        onIsCorrectTotal={onIsCorrectTotal} 
      />
    </Container>
  );
};

export default Board;