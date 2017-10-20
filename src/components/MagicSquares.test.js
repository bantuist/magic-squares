import React from 'react';
import { shallow } from 'enzyme';
import { MagicSquares } from './MagicSquares';

describe('MagicSquares', () => {
  const props = { gridSize: 3 };
  const magicSquares = shallow(<MagicSquares {...props} />);

  it('renders without crashing', () => {
    expect(magicSquares).toMatchSnapshot();
  });

  it('contains a the correc number of cells', () => {
    expect(magicSquares.find('.grid-cell').length).toBe(9);
  });
});
  