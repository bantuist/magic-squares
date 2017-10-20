import * as constants from '../actions/constants';

const magicSquares = (state = { gridSize: 3 }, action) => {
  // console.log(state, action);

  switch(action.type) {
    case constants.SET_GRID_SIZE:
    return action.gridSize;
    default:
      return state;
  }
};

export default magicSquares;