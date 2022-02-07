/**
* Dashboard of the landing page
* Gives the card component of the images in Sports Wear category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React from 'react';
import './sportsWear.css';
import Card from '../Card';
import sw1 from '../../../assets/sw_1.webp';
import sw2 from '../../../assets/sw_2.webp';
import sw3 from '../../../assets/sw_3.webp';
import sw4 from '../../../assets/sw_4.webp';
import sw5 from '../../../assets/sw_5.webp';

export default function SportsWear() {
  return (
    <>
      <h4 className="sportswearHeading">Trending in Sports Wear</h4>
      <div className="sportswear">
        <Card img={sw1} />
        <Card img={sw2} />
        <Card img={sw3} />
        <Card img={sw4} />
        <Card img={sw5} />
      </div>
    </>
  );
}
