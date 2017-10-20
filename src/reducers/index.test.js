import magicSquares from './index';

describe('rootReducer', () => {
  it('initializes the default state', () => {
    expect(magicSquares({}, {})).toEqual({});
  });
});