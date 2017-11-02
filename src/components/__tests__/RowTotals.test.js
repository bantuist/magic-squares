import React from 'react';
import { shallow } from 'enzyme';
import RowTotals from '../RowTotals';
import { totals } from '../../data/fixtures';

const onIsCorrectTotal = jest.fn();
const props = {
  rows: totals.rows,
  onIsCorrectTotal
};

describe('RowTotals', () => {
  const rowTotals = shallow(<RowTotals { ...props }/>);

  it('renders without crashing', () => {
    expect(rowTotals).toMatchSnapshot();
  });
});