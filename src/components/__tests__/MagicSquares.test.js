import React from 'react';
import { shallow } from 'enzyme';
import { MagicSquares } from '../MagicSquares';

describe('MagicSquares', () => {
  const magicSquares = shallow(<MagicSquares />);

  it('renders without crashing', () => {
    expect(magicSquares).toMatchSnapshot();
  });
});
  