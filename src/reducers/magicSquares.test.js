import magicSquaresReducer from './magicSquares';
import * as constants from '../actions/constants';
import Grid from '../helpers/Grid';

const grid = new Grid(3);

describe('magicSquaresReducer', () => {
  const initialState = {
    isActive: false,
    gridSize: 3, 
    grid: grid.setGrid(3),
    totals: grid.getTotals() 
  };

  describe('when initializing a grid', () => {
    it('sets a default grid size', () => {
      expect(magicSquaresReducer(undefined, { 
        type: constants.SET_GRID_SIZE, 
        gridSize: initialState.gridSize 
      })).toEqual(initialState.gridSize);
    });

    it('correctly computes the default totals for a 3x3 grid', () => {
      expect(magicSquaresReducer(undefined, { type: constants.GET_TOTALS }))
        .toEqual(initialState.totals);
    });
  });

  describe('when setting a grid size', () => {
    xit('sets a 3x3 grid', () => {

    });
    xit('sets a 4x4 grid', () => {

    });
    xit('sets a 5x5 grid', () => {

    });
    
  });

  describe('when updating a grid', () => {
    it('correctly computes totals for a 3x3 grid', () => {
      const action = { id: 4, value: 5, activeElement: null };
      const expectedState = {
        ...initialState,
        activeElement: action.activeElement, // unnecessary for test
        grid: grid.updateGrid(action.id, action.value),
        totals: grid.getTotals()
      };
      
      expect(magicSquaresReducer(initialState, { 
        type: constants.UPDATE_GRID, 
        id: action.id,
        value: action.value,
        activeElement: action.activeElement
      })).toEqual(expectedState);
    });

    xit('correctly computes totals for a 4x4 grid', () => {
      
    });
    xit('correctly computes totals for a 5x5 grid', () => {
      
    });
  });

});