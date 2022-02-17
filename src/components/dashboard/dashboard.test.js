/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';
import ImageSlider from './imageSlider/ImageSlider';
import DealsOfTheDay from './dealsOfTheDay/DealsOfTheDay';
import BiggestDeal from './biggestDeal/BiggestDeal';
import CategoriesToBag from './categoriesToBag/CategoriesToBag';
import Luxe from './luxe/Luxe';
import IndianWear from './indianWear/IndianWear';
import SportsWear from './sportsWear/SportsWear';
import Footwear from './footwear/Footwear';

describe('Checking Dashboard Component', () => {
  it('Should render ImageSlider component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<ImageSlider />)).toEqual(true);
  });
  it('Should render DealsOfTheDay component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<DealsOfTheDay />)).toEqual(true);
  });
  it('Should render BiggestDeal component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<BiggestDeal />)).toEqual(true);
  });
  it('Should render CategoriesToBag component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<CategoriesToBag />)).toEqual(true);
  });
  it('Should render Luxe component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<Luxe />)).toEqual(true);
  });
  it('Should render IndianWear component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<IndianWear />)).toEqual(true);
  });
  it('Should render SportsWear component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<SportsWear />)).toEqual(true);
  });
  it('Should render Footwear component', () => {
    const wrapper = shallow(<Dashboard />);
    expect(wrapper.containsMatchingElement(<Footwear />)).toEqual(true);
  });
});
