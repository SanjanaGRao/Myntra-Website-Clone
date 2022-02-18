/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Appbar from '../../components/header/Appbar';
import FooterMain from '../../components/footer/FooterMain';
import Homepage from './Homepage';
import Dashboard from '../../components/dashboard/Dashboard';

describe('Checking Order Success Component', () => {
  it('Should render Appbar component', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.containsMatchingElement(<Appbar />)).toEqual(true);
  });
  it('Should render FooterMain component', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.containsMatchingElement(<FooterMain />)).toEqual(true);
  });
  it('Should render Dashboard component', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper.containsMatchingElement(<Dashboard />)).toEqual(true);
  });
});
