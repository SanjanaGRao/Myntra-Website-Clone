/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Card from '@mui/material/Card';
import OrderSuccessCard from './OrderSuccessCard';

describe('Order Success Header ', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<OrderSuccessCard />);
  });
  it('should render 2 <button />', () => {
    expect(wrapper.find('button').length).toBe(2);
  });
  it('should render Card', () => {
    expect(wrapper.containsMatchingElement(Card)).toBeTruthy();
  });
});
