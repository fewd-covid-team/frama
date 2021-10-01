import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import TraitorsScreen from './index';
import store from '../../store';

test('TraitorsScreen snapshot', () => {
  const component = renderer.create(
    <Provider store={store}>
      <TraitorsScreen />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
