import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
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

class Cells extends Component {
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
    const { gridSize, grid, onUpdateGrid } = this.props;
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
        {cells} 
      </Container>
    );
  }
};

export default Cells;