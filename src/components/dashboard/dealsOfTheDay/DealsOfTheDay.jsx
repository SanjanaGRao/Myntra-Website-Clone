/**
* Dashboard of the landing page
* Gives the card component of the images in Deals Of The Day category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React from 'react';
import './dealsOfTheDay.css';
import Card from '../Card';
import deal1 from '../../../assets/deals_1.webp';
import deal2 from '../../../assets/deals_2.webp';
import deal3 from '../../../assets/deals_3.webp';
import deal4 from '../../../assets/deals_4.webp';
import deal5 from '../../../assets/deals_5.webp';

export default function DealsOfTheDay() {
  return (
    <>
      <h4 className="dealsofdayHeading">Deals of the Day</h4>
      <div className="dealsofday">
        <Card img={deal1} />
        <Card img={deal2} />
        <Card img={deal3} />
        <Card img={deal4} />
        <Card img={deal5} />
      </div>
    </>
  );
}
