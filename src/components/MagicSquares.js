import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { setGridSize } from '../actions/magicSquares';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(${({gridSize}) => gridSize}, 100px);
`;

const Cell = styled.div`
border: 1px solid #ddd;
`;

const Input = styled.input`
  height: 100px;
  width: 100%;
  font-size: 1em;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export class MagicSquares extends Component {
  renderGrid(gridSize) {
    const cell = { x: gridSize + 1, y: 0 };

    return Array.from(Array(gridSize * gridSize)).map((row, i) => {
      // Move to next row (x--) and reset column (y = 0) at the end of each row
      if (i % gridSize === 0) {
        cell.x--;
        cell.y = 0;
      }
      
      // Move to next column (y++)
      cell.y++;
      
      // Calculate diagonals based on the number of cells between diagonal cells
      if (i % (gridSize + 1) === 0) {
        cell.diagonal = '1';
      } else if (i % (gridSize - 1) === 0) {
        cell.diagonal = '2';
      } else {
        cell.diagonal = false;
      }

      let rowTotal, columnTotal;
      if (cell.y === gridSize) rowTotal = true;
      if (cell.x === 1) columnTotal = true;

      // console.log(cell);

      return (
        <Cell className="grid-cell" key={uuid()}>
          <Input 
            data-cell={JSON.stringify(cell)} 
            placeholder={`${++i}: (${cell.x}, ${cell.y})`} 
          />
          {(rowTotal || columnTotal) && 
            <span>total: </span>
          }
        </Cell>
      );
    });
  }
  render() {
    const { gridSize } = this.props;
    // const gridSize = 5;

    return (
      <Grid gridSize={gridSize}>
        {this.renderGrid(gridSize)}
      </Grid>
    );
  }
}

export default connect(state => {
  return { gridSize: state.gridSize }
}, { setGridSize })(MagicSquares);
