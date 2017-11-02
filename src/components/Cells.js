import React, { Component } from 'react';
import styled from 'styled-components';
import { isEven } from '../helpers';

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
  componentDidMount() {
    if (this.props.activeElement) {
      this[this.props.activeElement].focus();
    }
  }
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
    const { gridSize, cells, onUpdateGrid } = this.props;
    const exists = value => {
      return Object.keys(cells).find(key => {
        return parseInt(value, 10) === cells[key].value;
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
    const grid = Object.keys(cells).map((key, i) => {
      let cell = cells[key];
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
        {grid} 
      </Container>
    );
  }
};

export default Cells;