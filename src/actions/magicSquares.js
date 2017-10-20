import * as constants from './constants';

export const setGridSize = gridSize => {
  return {
    type: constants.SET_GRID_SIZE,
    gridSize
  };
};