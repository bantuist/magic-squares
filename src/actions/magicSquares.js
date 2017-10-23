import * as constants from './constants';

export const setGridSize = gridSize => {
  return {
    type: constants.SET_GRID_SIZE,
    gridSize
  };
};

export const updateGrid = (id, value, activeElement) => {
  return {
    type: constants.UPDATE_GRID,
    id,
    value,
    activeElement
  };
};
