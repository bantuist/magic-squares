import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGridSize, updateGrid } from '../actions/magicSquares';
import Board from './Board';
import styled from 'styled-components';

const Container = styled.div``;
const Controls = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.button`
  cursor: pointer;
  margin: 0 5px;
`;

export class MagicSquares extends Component {
  componentDidMount() {
    // QUESTION: Why can't I focus this here?
    // console.log(this[`grid-cell-0`]);
    // this[`grid-cell-0`].focus();
  }
  
  isCorrectTotal = total => total === this.props.total;
 
  clue = () => {
    const { grid, solution } = this.props;

    const cellId = Object.keys(grid).find((key, i) => {
      // Set correct cell value if cell is empty or has the wrong value
      return !grid[key].value || grid[key].value !== solution[i]
    });

    
    if (cellId) {
      this.props.updateGrid(
        cellId,
        solution[cellId],
        null
      );
    }
  }

  solve = () => {
    const { grid, solution } = this.props;

    Object.keys(grid).forEach((key, i) => {
      const cell = grid[key];

      this.props.updateGrid(
        cell.id,
        solution[i],
        null
      );
    });
  }

  reset = () => {
    const { grid } = this.props;
  
    Object.keys(grid).forEach((key, i) => {
      const cell = grid[key];

      this.props.updateGrid(
        cell.id,
        0,
        null
      );
    });
  }

  render() {
    const { gridSize, grid, totals } = this.props;

    return (
      <Container >
        <Board 
          gridSize={gridSize} 
          grid={grid}
          totals={totals}
          onIsCorrectTotal={this.isCorrectTotal}
          onUpdateGrid={this.props.updateGrid}
          activeElement={this.props.activeElement}
        />
        <Controls>
          <Button onClick={this.solve}>Solve</Button>
          <Button onClick={this.clue}>Clue</Button>
          <Button onClick={this.reset}>Reset</Button>
        </Controls>
      </Container>
    );
  }
}

export default connect(({ gridSize, total, solution, grid, totals, activeElement }) => {
  return { gridSize, total, solution, grid, totals, activeElement };
}, { setGridSize, updateGrid })(MagicSquares);