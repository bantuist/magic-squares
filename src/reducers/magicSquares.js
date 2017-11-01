import * as constants from '../actions/constants';
import Grid from '../grid/Grid';

const grid = new Grid(3);

const initialState = {
  activeElement: grid.activeElement,
  cells: grid.setCells(grid.gridSize),
  gridSize: grid.gridSize, 
  solution: [ 4, 9, 2, 3, 5, 7, 8, 1, 6 ], // grid.getSolution(gridSize) TODO: write solution algorithm
  total: grid.total,
  totals: grid.getTotals()  // TODO: switch to arrays
};

const magicSquares = (state = initialState, action) => {
  // console.log(state, action);

  switch(action.type) {
    case constants.SET_GRID_SIZE:
      return action.gridSize;
    // case constants.DEFINE_GRID:
    case constants.SET_GRID:
      return grid.setCells(action.gridSize);
    case constants.UPDATE_GRID:
      return {
        ...state,
        activeElement: action.activeElement,
        grid: grid.updateGrid(action.id, action.value),
        totals: grid.getTotals()
      };
    case constants.GET_TOTALS:
      return grid.getTotals();
    default:
      return state;
  }
};

export default magicSquares;