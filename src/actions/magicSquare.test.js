import * as constants from './constants';
import * as actions from './magicSquares';

it ('creates an action to set the grid size', () => {
  const gridSize = 3;
  const expectedAction = { type: constants.SET_GRID_SIZE, gridSize };

  expect(actions.setGridSize(gridSize)).toEqual(expectedAction);
});

it ('creates an action to update the grid size', () => {
  const id = 1;
  const value = 2;
  const activeElement = null; // unnecessary for this test

  const expectedAction = { 
    type: constants.UPDATE_GRID, 
    id, 
    value, 
    activeElement 
  };

  expect(actions.updateGrid(id, value, activeElement)).toEqual(expectedAction);
});
