import * as constants from './constants';

export const setGridSize = gridSize => {
  return {
    type: constants.SET_GRID_SIZE,
    gridSize
  };
};

// export const getTotals = () => {
//   return {
//     type: constants.GET_TOTALS
//   };
// };