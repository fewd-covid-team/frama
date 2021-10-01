import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import StatsScreen from './index';
import store from '../../store';
import { NetworkMock } from 'jest-network-mock';

test('StatsScreen snapshot', () => {
  NetworkMock.mock();

  const component = renderer.create(
    <Provider store={store}>
      <StatsScreen />
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  NetworkMock.clean();
});
