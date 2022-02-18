/**
* Dashboard of the landing page
* Gives the complete dashboard of the landing page by combining the sub components
* @returns the complete dashboard
* @author Sanjana Rao
*/
import React from 'react';
import ImageSlider from './imageSlider/ImageSlider';
import DealsOfTheDay from './dealsOfTheDay/DealsOfTheDay';
import BiggestDeal from './biggestDeal/BiggestDeal';
import CategoriesToBag from './categoriesToBag/CategoriesToBag';
import Luxe from './luxe/Luxe';
import IndianWear from './indianWear/IndianWear';
import SportsWear from './sportsWear/SportsWear';
import Footwear from './footwear/Footwear';

export default function Dashboard() {
  return (
    <>
      <ImageSlider />
      <DealsOfTheDay />
      <BiggestDeal />
      <CategoriesToBag />
      <Luxe />
      <IndianWear />
      <SportsWear />
      <Footwear />
    </>
  );
}
