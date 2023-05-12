/* eslint-disable max-len */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import BiggestDeal from './BiggestDeal';
import reducer from '../../../reducer/index';
import Card from '../Card';

test('Should pass when it finds the heading', () => {
  const store = createStore(reducer);
  const component = shallow(
    <Provider store={store}>
      <BiggestDeal />
    </Provider>,
  );
  expect(component.find('h4').exists());
});

test('Should pass when it finds the first div', () => {
  const store = createStore(reducer);
  const component = shallow(
    <Provider store={store}>
      <BiggestDeal />
    </Provider>,
  );
  expect(component.find('div').exists());
});

test('Should pass when it finds the second div', () => {
  const store = createStore(reducer);
  const component = shallow(
    <Provider store={store}>
      <BiggestDeal />
    </Provider>,
  );
  expect(component.find('secondDiv').exists()).toEqual(false);
});

test('Should pass when it finds a Card component', () => {
  const store = createStore(reducer);
  const component = shallow(
    <Provider store={store}>
      <BiggestDeal />
    </Provider>,
  );
  expect(component.find(Card).exists());
});
