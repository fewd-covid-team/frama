import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TipsScreen from './index';
import store from '../../store';

test('TipsScreen snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <TipsScreen />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
