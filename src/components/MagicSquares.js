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
const Cell = styled.input`
  height: 100px;
  font-size: 4em;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export class MagicSquares extends Component {
  renderGrid(gridSize) {
    return Array.from(Array(gridSize * gridSize)).map((row, i) => {
      return (
        <Cell className="grid-cell" key={uuid()} placeholder={i + 1} />
      );
    });
  }
  render() {
    const { gridSize } = this.props;

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
