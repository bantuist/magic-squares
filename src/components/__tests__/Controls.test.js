import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../Controls';

const onSolve = jest.fn();
const onClue = jest.fn();
const onReset = jest.fn();
const props = { onSolve, onClue, onReset };

describe('Controls', () => {
  const controls = shallow(<Controls { ...props }/>);

  it('renders without crashing', () => {
    expect(controls).toMatchSnapshot();
  });

  it('calls `onSolve()`', () => {
    controls.find('.solve-button').simulate('click');
    expect(props.onSolve).toHaveBeenCalled();
  });

  it('calls `onClue()`', () => {
    controls.find('.clue-button').simulate('click');
    expect(props.onSolve).toHaveBeenCalled();
  });

  it('calls `onReset()`', () => {
    controls.find('.reset-button').simulate('click');
    expect(props.onSolve).toHaveBeenCalled();
  });
});
