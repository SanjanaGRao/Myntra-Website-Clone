/* eslint-disable react/no-render-return-value */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import Products from './Products';
import reducer from '../../reducer/index';
import OneProduct from './OneProduct';

describe('Checking Product Component', () => {
  it('Should not render OneProduct component', () => {
    const store = createStore(reducer);
    const wrapper = shallow(
      <Provider store={store}>
        <BrowserRouter>
          <Products />
        </BrowserRouter>
      </Provider>,
    );
    expect(wrapper.containsMatchingElement(<OneProduct />)).toEqual(false);
  });
});
