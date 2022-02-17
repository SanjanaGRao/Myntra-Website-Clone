/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import OrderSuccess from './OrderSuccess';
import OrderSuccessCard from '../../components/orderSuccessComponents/OrderSuccessCard';
import OrderSuccessHeader from '../../components/orderSuccessComponents/OrderSuccessHeader';

describe('Checking Order Success Component', () => {
  it('Should render OrderSuccessCard component', () => {
    const wrapper = shallow(<OrderSuccess />);
    expect(wrapper.containsMatchingElement(<OrderSuccessCard />)).toEqual(true);
  });
  it('Should render OrderSuccessCard component', () => {
    const wrapper = shallow(<OrderSuccess />);
    expect(wrapper.containsMatchingElement(<OrderSuccessHeader />)).toEqual(true);
  });
});
