/**
* Dashboard of the landing page
* Gives the card component of the images in Indian Wear category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React from 'react';
import './indianWear.css';
import Card from '../Card';
import iw1 from '../../../assets/iw_1.webp';
import iw2 from '../../../assets/iw_2.webp';
import iw3 from '../../../assets/iw_3.webp';
import iw4 from '../../../assets/iw_4.webp';
import iw5 from '../../../assets/iw_5.webp';
import iw6 from '../../../assets/iw_6.webp';
import iw7 from '../../../assets/iw_7.webp';
import iw8 from '../../../assets/iw_8.webp';
import iw9 from '../../../assets/iw_9.webp';
import iw10 from '../../../assets/iw_10.webp';

export default function IndianWear() {
  return (
    <>
      <h4 className="indianwearHeading">Trending in Indian Wear</h4>
      <div className="indianWear">
        <Card img={iw1} />
        <Card img={iw2} />
        <Card img={iw3} />
        <Card img={iw4} />
        <Card img={iw5} />
      </div>
      <div className="indianWear">
        <Card img={iw6} />
        <Card img={iw7} />
        <Card img={iw8} />
        <Card img={iw9} />
        <Card img={iw10} />
      </div>
    </>
  );
}
