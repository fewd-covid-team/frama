import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import StatsScreen from './index';
import store from '../../store';

test('StatsScreen snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <StatsScreen />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
