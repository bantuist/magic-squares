import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGridSize, updateGrid } from '../actions/magicSquares';
import Board from './Board';
import Controls from './Controls';
import styled from 'styled-components';

const Container = styled.div``;

export class MagicSquares extends Component {
  clue = () => {
    const { cells, solution } = this.props;

    const cellId = Object.keys(cells).find((key, i) => {
      // Set correct cell value if cell is empty or has the wrong value
      return !cells[key].value || cells[key].value !== solution[i]
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
    const { cells, solution } = this.props;

    Object.keys(cells).forEach((key, i) => {
      const cell = cells[key];

      this.props.updateGrid(
        cell.id,
        solution[i],
        null
      );
    });
  }
  reset = () => {
    const { cells } = this.props;
  
    Object.keys(cells).forEach((key, i) => {
      const cell = cells[key];

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
      cells, 
      totals,
      total,
      updateGrid,
      activeElement,
    } = this.props;

    return (
      <Container >
        <Board 
          gridSize={gridSize} 
          cells={cells}
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

export default connect(({ gridSize, total, solution, cells, totals, activeElement }) => {
  return { gridSize, total, solution, cells, totals, activeElement };
}, { setGridSize, updateGrid })(MagicSquares);