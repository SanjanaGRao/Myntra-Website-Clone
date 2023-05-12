/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import KidsDropdown from './KidsDropdown';

describe('Home Drop Down', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<KidsDropdown />);
  });
  it('should render <span />', () => {
    expect(wrapper.find('span').length).toEqual(1);
  });
});
