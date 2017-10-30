import React from 'react';
import { shallow } from 'enzyme';
import Board from '../Board';
import Grid from '../../helpers/Grid';

const grid = new Grid(3);
const mockSetGrid = jest.fn();
const mockUpdateGrid = jest.fn();
const props = {
  activeElement: null,
  gridSize: 3, 
  total: 0,
  grid: grid.setGrid(3),
  totals: grid.getTotals(),
  setGrid: mockSetGrid,
  updateGrid: mockUpdateGrid
};

describe('Board', () => {
  const board = shallow(<Board { ...props } />);

  it('renders without crashing', () => {
    expect(board).toMatchSnapshot();
  });
});
  