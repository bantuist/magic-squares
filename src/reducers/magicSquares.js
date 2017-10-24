import * as constants from '../actions/constants';
import Grid from '../helpers/Grid';

const grid = new Grid(3);

const initialState = {
  activeElement: null,
  gridSize: 3, 
  total: grid.total,
  grid: grid.setGrid(3),
  totals: grid.getTotals() 
};

const magicSquares = (state = initialState, action) => {
  // console.log(state, action);

  switch(action.type) {
    case constants.SET_GRID_SIZE:
      return action.gridSize;
    // case constants.DEFINE_GRID:
    case constants.SET_GRID:
      return grid.setGrid(action.gridSize);
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