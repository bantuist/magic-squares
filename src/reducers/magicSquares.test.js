import magicSquaresReducer from './magicSquares';
import * as constants from '../actions/constants';

describe('magicSquaresReducer', () => {
  describe('when initializing', () => {
    const gridSize = 3;

    it('sets a default size', () => {
      expect(magicSquaresReducer(undefined, { type: constants.SET_GRID_SIZE, gridSize }))
        .toEqual(gridSize);
    });
  });
});