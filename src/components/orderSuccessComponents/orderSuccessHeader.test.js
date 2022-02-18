/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import OrderSuccessHeader from './OrderSuccessHeader';

describe('Order Success Header ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OrderSuccessHeader />);
  });
  it('should render 2 <div />', () => {
    expect(wrapper.find('div').length).toBe(2);
  });
});
