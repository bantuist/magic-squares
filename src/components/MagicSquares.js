import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { setGridSize, updateGrid } from '../actions/magicSquares';
import styled from 'styled-components';

const Container = styled.div`
  height: 400px;
  width: 500px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 3fr 1fr;
`;
const Cells = styled.div`
  grid-column: 2/3;
  display: grid;
  grid-template-columns: repeat(${({ gridSize }) => gridSize}, 100px);
  grid-auto-rows: 100px;
`;
const RowTotals = styled.div`
  font-size: 2em;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  `;
const ColumnTotals = styled.div`
  font-size: 2em;
  grid-column: 1/4;
  display: flex;
  flex-direction: row;
`;
const Cell = styled.div`
  height: 100%;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  height: 100px;
  width: 100%;
  font-size: 2em;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export class MagicSquares extends Component {
  componentDidUpdate() {
    const node = this[this.props.activeElement];
    const temp = node.value;

    node.value = '';
    node.value = temp;
    node.focus();
  }
  handleChange = (event, id) => {
    this.props.updateGrid(
      id, 
      parseInt(event.target.value || 0, 10),
      `cell-${id}`
    );
  }

  render() {
    const { gridSize, grid, totals } = this.props;
    const { rows, columns, diagonals } = totals;

    const cells = Object.keys(grid).map((key, i) => {
      let cell = grid[key];
      let cellClassName =  `grid-cell-${cell.id} ${cell.x}-${cell.y} ${cell.diagonal}`;

      return (
        <Cell key={uuid()}>
          <Input
            className={cellClassName}
            innerRef={comp => this[`cell-${cell.id}`] = comp}
            onChange={event => this.handleChange(event, cell.id)}
            value={cell.value}
            // placeholder={`${i}: (${cell.x}, ${cell.y}), ${cell.value}`} 
          />
        </Cell>
      );
    });

    const rowTotals = Object.keys(rows).map(key => {
      return (
        <Cell key={key} className="row-total">
          <span>{rows[key]}</span>
        </Cell>
      );
    });

    const columnTotals = Object.keys(columns).map(key => {
      return (
        <Cell key={key} className="row-total">
          <span>{columns[key]}</span>
        </Cell>
      );
    });

    return (
      <Container >
        <Cells gridSize={gridSize}>
          {cells}
        </Cells>
        <RowTotals>{rowTotals}</RowTotals>
        <ColumnTotals>
          <Cell><span>{diagonals[0]}</span></Cell>
          {columnTotals}
          <Cell><span>{diagonals[1]}</span></Cell>
        </ColumnTotals>
      </Container>
    );
  }
}

export default connect(({ gridSize, grid, totals, activeElement }) => {
  return { gridSize, grid, totals, activeElement };
}, { setGridSize, updateGrid })(MagicSquares);