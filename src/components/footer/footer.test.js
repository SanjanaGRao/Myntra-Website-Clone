/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import FooterMain from './FooterMain';
import FooterOne from './FooterOne';
import FooterTwo from './FooterTwo';

describe('Checking Footer Component', () => {
  it('Renders FooterOne component', () => {
    const wrapper = shallow(<FooterMain />);
    expect(wrapper.containsMatchingElement(<FooterOne />)).toEqual(true);
  });
  it('Renders FooterTwo component', () => {
    const wrapper = shallow(<FooterMain />);
    expect(wrapper.containsMatchingElement(<FooterTwo />)).toEqual(true);
  });
});
