import React from 'react';
import { shallow } from 'enzyme';
import Cells from '../Cells';
import Grid from '../../grid/Grid';
import * as defaults from '../../data/fixtures';

const grid = new Grid(3);
const onSetCells = jest.fn();
const onUpdateGrid = jest.fn();
const props = {
  activeElement: grid.activeElement,
  gridSize: grid.gridSize, 
  total: grid.total,
  cells: grid.cells,
  totals: grid.totals,
  onSetCells,
  onUpdateGrid
};
const cellCount = Object.keys(defaults.cells).length;

describe('Cells', () => {
  const cells = shallow(<Cells {...props} />);

  it('renders without crashing', () => {
    expect(cells).toMatchSnapshot();
  });

  it('contains a the correct default number of cells', () => {
    expect(cells.find('.grid-cell').length).toEqual(cellCount);
  });

  describe('when the user types into the cell input', () => {
    const value = 5;
    
    xit('updates the cell value in `state` as a number', () => {
      // console.log(cells.find('.cell-1').;
      cells.find('.cell-1').simulate('change', { target: { value }});
      // console.log(cells.find('.cell-1').children());
      // console.log(cells.state().grid) ;
      // expect(cells.state().grid['1'].value).toEqual(parseInt(value, 10));
    });

    xit("doesn't update the cell value in `state` with a NaN value", () => {
      const action = { id: 4, value: NaN, activeElement: null };
      
      expect(magicSquaresReducer(initialState, { 
        type: constants.UPDATE_GRID, 
        id: action.id,
        value: action.value,
        activeElement: action.activeElement
      })).toEqual(initialState);
    });
    
    xit("doesn't update the cell value in `state` with an empty string value", () => {
      const action = { id: 4, value: '', activeElement: null };
      
      expect(magicSquaresReducer(initialState, { 
        type: constants.UPDATE_GRID, 
        id: action.id,
        value: action.value,
        activeElement: action.activeElement
      })).toEqual(initialState);
    });
      
  });

  describe('when a row is full', () => {
    // let cells = cells.find('.grid-cell');
    // const row1 = Object.keys(cells).filter((key, i) => {
      // console.log(key, i);
      // return i < grid.gridSize;
    // });
    // console.log(row1);
    describe('and has a correct total', () => {
      // fill row with correct total
      // expect total color to be green
    });
    describe('and has an incorrect total', () => {
      // fill row with incorrect total
      // expect total color to be red
    });
  });
  describe('when a column is full', () => {
    describe('and has a correct total', () => {
  
    });
    describe('and has an incorrect total', () => {
  
    });
  });
  describe('when a diagonal is full', () => {
    describe('and has a correct total', () => {

    });

    describe('and has an incorrect total', () => {

    });
  });
  describe('when solved', () => {

  });
});
  