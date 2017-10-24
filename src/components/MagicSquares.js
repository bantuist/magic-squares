import React, { Component } from 'react';
import { connect } from 'react-redux';
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
  font-size: 1.5em;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
`;
const ColumnTotals = styled.div`
  font-size: 1.5em;
  grid-column: 1/4;
  display: flex;
  flex-direction: row;
`;
const Total = styled.span`
  color: ${({ isSolved }) => isSolved ? '#7AE582' : '#FF5A5F'};
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

export class MagicSquares extends Component {
  componentDidMount() {
    // QUESTION: Why can't I focus this here?
    // console.log(this[`grid-cell-0`]);
    // this[`grid-cell-0`].focus();
  }
  componentDidUpdate() {
    const active = this[this.props.activeElement];
    const temp = active.value;

    active.value = '';
    active.value = temp;
    active.focus();
  }

  isSolved = total => total === this.props.total;

  handleChange = (event, id) => {
    const { value } = event.target;

    if (!isNaN(value)) {
      this.props.updateGrid(
        id, 
        parseInt(value || 0, 10),
        `grid-cell cell-${id}`
      );
    }
  }

  render() {
    const { gridSize, total, grid, totals } = this.props;
    const { rows, columns, diagonals } = totals;

    const cells = Object.keys(grid).map((key, i) => {
      let cell = grid[key];
      let isEven = i % 2 === 0;
      // grid-cell used to select all grid cells
      // cell-${cell.id} used to select specific cell
      let cellClassName =  `grid-cell cell-${cell.id}`;

      return (
        <Cell key={cell.id}>
          <Input
            className={cellClassName}
            isEven={isEven}
            maxLength="3"
            innerRef={comp => this[`grid-cell cell-${cell.id}`] = comp}
            onChange={event => this.handleChange(event, cell.id)}
            value={cell.value ? cell.value : '' }
            // placeholder={`${i}: (${cell.x}, ${cell.y}), ${cell.value}`} 
          />
        </Cell>
      );
    });

    const rowTotals = Object.keys(rows).map(key => {
      const total = rows[key];
        
      return (
        <Cell key={key} className="row-total">
          <Total isSolved={this.isSolved(total)}>{total ? total : '' }</Total>
        </Cell>
      );
    });

    const columnTotals = Object.keys(columns).map(key => {
      const total = columns[key];

      return (
        <Cell key={key} className="row-total">
          <Total isSolved={this.isSolved(total)}>{total ? total : '' }</Total>
        </Cell>
      );
    });
    
    const d1Total = diagonals[0];
    const d2Total = diagonals[1];

    return (
      <Container >
        <Cells gridSize={gridSize}>
          {cells}
        </Cells>
        <RowTotals>{rowTotals}</RowTotals>
        <ColumnTotals>
          <Cell>
            <Total isSolved={this.isSolved(diagonals[0])}>{d1Total ? d1Total : '' }</Total>
          </Cell>
            {columnTotals}
          <Cell>
            <Total isSolved={this.isSolved(diagonals[1])}>{d2Total ? d2Total : '' }</Total>
          </Cell>
        </ColumnTotals>
      </Container>
    );
  }
}

export default connect(({ gridSize, total, grid, totals, activeElement }) => {
  return { gridSize, total, grid, totals, activeElement };
}, { setGridSize, updateGrid })(MagicSquares);