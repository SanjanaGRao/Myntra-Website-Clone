/**
* Dashboard of the landing page
* Gives the card component of the images in Biggest Deal category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React from 'react';
import './biggestDeal.css';
import Card from '../Card';
import bigd1 from '../../../assets/bigd_1.webp';
import bigd2 from '../../../assets/bigd_2.webp';
import bigd3 from '../../../assets/bigd_3.webp';
import bigd4 from '../../../assets/bigd_4.webp';
import bigd5 from '../../../assets/bigd_5.jpg';
import bigd6 from '../../../assets/bigd_6.webp';
import bigd7 from '../../../assets/bigd_7.webp';
import bigd8 from '../../../assets/bigd_8.webp';
import bigd9 from '../../../assets/bigd_9.jpg';
import bigd10 from '../../../assets/bigd_10.webp';

export default function BiggestDeal() {
  return (
    <>
      <h4 className="biggestdealHeading">Biggest Deal on Top Brands</h4>
      <div className="biggestdeal">
        <Card img={bigd1} />
        <Card img={bigd2} />
        <Card img={bigd3} />
        <Card img={bigd4} />
        <Card img={bigd5} />
      </div>
      <div className="biggestdealSecond">
        <Card img={bigd6} />
        <Card img={bigd7} />
        <Card img={bigd8} />
        <Card img={bigd9} />
        <Card img={bigd10} />
      </div>
    </>
  );
}
