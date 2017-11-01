import magicSquares from './index';

describe('rootReducer', () => {
  xit('initializes the default state', () => {
    expect(magicSquares({}, {})).toEqual({});
  });
});