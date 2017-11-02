import React from 'react';
import { shallow } from 'enzyme';
import ColumnTotals from '../ColumnTotals';
import { totals } from '../../data/fixtures';

const onIsCorrectTotal = jest.fn();
const props = {
  columns: totals.columns,
  diagonals: totals.diagonals,
  onIsCorrectTotal
};

describe('ColumnTotals', () => {
  const columnTotals = shallow(<ColumnTotals { ...props } />);

  it('renders without crashing', () => {
    expect(columnTotals).toMatchSnapshot();
  });
});