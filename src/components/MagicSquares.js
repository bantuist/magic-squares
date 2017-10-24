import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setGridSize, updateGrid } from '../actions/magicSquares';
import styled from 'styled-components';

const Container = styled.div``;
const Board = styled.div`
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
  color: ${({ isCorrectTotal }) => isCorrectTotal ? '#7AE582' : '#FF5A5F'};
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
  componentDidUpdate() {
    const { activeElement } = this.props;

    if (activeElement) {
      const active = this[this.props.activeElement];
      const temp = active.value;
      
      active.value = '';
      active.value = temp;
      active.focus();
    }
  }

  isCorrectTotal = total => total === this.props.total;
  isEven = number => number % 2 === 0;
  exists = value => {
    const { grid } = this.props;
    return Object.keys(grid).find(key => {
      return parseInt(value, 10) === grid[key].value;
    });
  }

  handleChange = (event, id) => {
    const { value } = event.target;
    if (!isNaN(value) && (!this.exists(value))) {
      
      this.props.updateGrid(
        id, 
        parseInt(value, 10) || 0,
        `grid-cell cell-${id}`
      );
    }
  }

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
    const { rows, columns, diagonals } = totals;

    const cells = Object.keys(grid).map((key, i) => {
      let cell = grid[key];
      let isEven = this.isEven(i + 1);

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
            // placeholder={`${i}: ${cell.value}`} 
          />
        </Cell>
      );
    });

    const rowTotals = Object.keys(rows).map(key => {
      const total = rows[key];
        
      return (
        <Cell key={key} className="row-total">
          <Total isCorrectTotal={this.isCorrectTotal(total)}>{total ? total : '' }</Total>
        </Cell>
      );
    });

    const columnTotals = Object.keys(columns).map(key => {
      const total = columns[key];

      return (
        <Cell key={key} className="row-total">
          <Total isCorrectTotal={this.isCorrectTotal(total)}>{total ? total : '' }</Total>
        </Cell>
      );
    });
    
    const d1Total = diagonals[0];
    const d2Total = diagonals[1];

    return (
      <Container >
        <Board gridSize={gridSize}> 
          <Cells gridSize={gridSize}>
            {cells}
          </Cells>
          <RowTotals>{rowTotals}</RowTotals>
          <ColumnTotals>
            <Cell>
              <Total isCorrectTotal={this.isCorrectTotal(diagonals[0])}>{d1Total ? d1Total : '' }</Total>
            </Cell>
              {columnTotals}
            <Cell>
              <Total isCorrectTotal={this.isCorrectTotal(diagonals[1])}>{d2Total ? d2Total : '' }</Total>
            </Cell>
          </ColumnTotals>
        </Board>
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