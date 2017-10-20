import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders without crashing', () => {
    expect(app).toMatchSnapshot();
  });

  it('contains a connected MagicSquares component', () => {
    expect(app.find('Connect(MagicSquares)').exists()).toBe(true);
  });
});
  