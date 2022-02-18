/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import HomeDropdown from './HomeDropdown';

describe('Home Drop Down', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomeDropdown />);
  });
  it('should render <div />', () => {
    expect(wrapper.find('div').length).toEqual(7);
  });
  it('should check if <b /> exists', () => {
    expect(wrapper.find('b').exists()).toBeTruthy();
  });
});
