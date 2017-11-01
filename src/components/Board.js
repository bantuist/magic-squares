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

const Board = ({ 
  gridSize, 
  cells, 
  activeElement,
  totals, 
  boardTotal, 
  onUpdateGrid 
}) => {
  const { columns, rows, diagonals } = totals;
  // const isFull = () => {
  //   const targetCells = Object.keys(grid).filter(key => {
  //     const cell = grid[key];
  //     // console.log(cell);
  //     // TODO: return 
  //   });
    // return targetCells.length === gridSize;
  // };
  const isCorrectTotal = total => {
    // isFull();
    return total === boardTotal;
  };
  
  return (
    <Container gridSize={gridSize}> 
      <Cells 
        gridSize={gridSize} 
        cells={cells} 
        activeElement={activeElement}
        onUpdateGrid={onUpdateGrid} 
      />
      <RowTotals rows={rows} onIsCorrectTotal={isCorrectTotal} />
      <ColumnTotals 
        columns={columns} 
        diagonals={diagonals} 
        onIsCorrectTotal={isCorrectTotal} 
      />
    </Container>
  );
};

export default Board;