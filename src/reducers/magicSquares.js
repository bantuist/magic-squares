import * as constants from '../actions/constants';
import Grid from '../helpers/Grid';

const grid = new Grid(3);

const magicSquares = (state = { gridSize: 3, grid: grid.setGrid(3), totals: grid.getTotals() }, action) => {
  console.log(state, action);

  switch(action.type) {
    case constants.SET_GRID_SIZE:
      return action.gridSize;
    // case constants.DEFINE_GRID:
    case constants.SET_GRID:
      grid.setGrid(action.gridSize);
      return grid.grid;
    case constants.UPDATE_GRID:
      // grid.updateGrid(action(cellId, value));
      // return grid.grid;
      return state;
    case constants.GET_TOTALS:
      return grid.getTotals();
    default:
      return state;
  }
};

export default magicSquares;