import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGridSize, updateGrid } from '../actions/magicSquares';
import Board from './Board';
import Controls from './Controls';
import styled from 'styled-components';

const Container = styled.div``;

export class MagicSquares extends Component {
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
    const { 
      gridSize, 
      grid, 
      totals,
      total,
      updateGrid,
      activeElement,
    } = this.props;

    return (
      <Container >
        <Board 
          gridSize={gridSize} 
          grid={grid}
          totals={totals}
          boardTotal={total}
          onUpdateGrid={updateGrid}
          activeElement={activeElement}
        />
        <Controls 
          onSolve={this.solve}
          onClue={this.clue}
          onReset={this.reset}
        />
      </Container>
    );
  }
}

export default connect(({ gridSize, total, solution, grid, totals, activeElement }) => {
  return { gridSize, total, solution, grid, totals, activeElement };
}, { setGridSize, updateGrid })(MagicSquares);