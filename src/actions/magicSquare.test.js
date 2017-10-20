import * as constants from './constants';
import * as actions from './magicSquares';

it ('creates an action to set the size', () => {
  const gridSize = 3;
  const expectedAction = { type: constants.SET_GRID_SIZE, gridSize };

  expect(actions.setGridSize(gridSize)).toEqual(expectedAction);
});
