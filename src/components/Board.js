import React, { Component } from 'react';
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
const Cells = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: repeat(${({ gridSize }) => gridSize}, 100px);
  grid-auto-rows: 100px;
`;
const Cell = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  color: ${({ isEven }) => isEven ? '#FFF' : '#222'};
  background-color: ${({ isEven }) => isEven ? '#222' : '#FFF'};
  height: 100px;
  width: 100%;
  font-size: 1.5em;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

class Board extends Component {
  componentDidUpdate() {
    if (this.props.activeElement) {
      const active = this[this.props.activeElement];
      const temp = active.value;
      
      active.value = '';
      active.value = temp;
      active.focus();
    }
  }

  render() {
    const { gridSize, grid, totals, onIsCorrectTotal, onUpdateGrid } = this.props;
    const { columns, rows, diagonals } = totals;
    const isEven = number => number % 2 === 0;
    const exists = value => {
      return Object.keys(grid).find(key => {
        return parseInt(value, 10) === grid[key].value;
      });
    };
    const handleChange = (event, id) => {
      const { value } = event.target;
      if (!isNaN(value) && (!exists(value))) {
        
        onUpdateGrid(
          id, 
          parseInt(value, 10) || 0,
          `grid-cell cell-${id}`
        );
      }
    };
    const cells = Object.keys(grid).map((key, i) => {
      let cell = grid[key];
      
      // grid-cell used to select all grid cells
      // cell-${cell.id} used to select specific cell
      let cellClassName =  `grid-cell cell-${cell.id}`;
      
      return (
        <Cell key={cell.id}>
        <Input
          className={cellClassName}
          isEven={isEven(i + 1)}
          maxLength="3"
          innerRef={comp => this[`grid-cell cell-${cell.id}`] = comp}
          onChange={event => handleChange(event, cell.id)}
          value={cell.value ? cell.value : '' }
        />
        </Cell>
      );
    });
    
    return (
      <Container gridSize={gridSize}> 
      <Cells gridSize={gridSize}>
      {cells}
      </Cells>
      <RowTotals rows={rows} onIsCorrectTotal={onIsCorrectTotal} />
      <ColumnTotals 
      columns={columns} 
      diagonals={diagonals} 
      onIsCorrectTotal={onIsCorrectTotal} 
      />
      </Container>
    );
  }
};

export default Board;