import React from 'react';
import { shallow } from 'enzyme';
import { MagicSquares } from './MagicSquares';
import Grid from '../helpers/Grid';

const grid = new Grid(3);
const mockSetGrid = jest.fn();
const mockUpdateGrid = jest.fn();
const props = {
  activeElement: null,
  gridSize: 3, 
  total: 0,
  grid: grid.setGrid(3),
  totals: grid.getTotals(),
  setGrid: mockSetGrid,
  updateGrid: mockUpdateGrid
};

describe('MagicSquares', () => {
  const magicSquares = shallow(<MagicSquares {...props} />);

  it('renders without crashing', () => {
    expect(magicSquares).toMatchSnapshot();
  });

  it('contains a the correct number of cells', () => {
    expect(magicSquares.find('.grid-cell').length).toEqual(9);
  });

  describe('when the user types into the cell input', () => {
    const value = 5;

    beforeEach(() => {
      magicSquares.find('.cell-1').simulate('change', { target: { value }});
    });

    xit('updates the cell value in `state` as a number', () => {
      console.log(magicSquares.state().grid) ;
      // expect(magicSquares.state().grid['1'].value).toEqual(parseInt(value, 10));
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

  describe('when a column has a correct total', () => {
  });
  describe('when a row has a correct total', () => {

  });
  describe('when a diagonal has a correct total', () => {

  });
  describe('when solved', () => {

  });
});
  