/**
* Dashboard of the landing page
* Gives the card component of the images in Footwear category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React from 'react';
import './footwear.css';
import Card from '../Card';
import fw1 from '../../../assets/fw_1.webp';
import fw2 from '../../../assets/fw_2.jpg';
import fw3 from '../../../assets/fw_3.webp';
import fw4 from '../../../assets/fw_4.webp';
import fw5 from '../../../assets/fw_5.webp';
import fw6 from '../../../assets/fw_6.webp';
import fw7 from '../../../assets/fw_7.webp';
import fw8 from '../../../assets/fw_8.webp';
import fw9 from '../../../assets/fw_9.webp';
import fw10 from '../../../assets/fw_10.webp';

export default function Footwear() {
  return (
    <>
      <h4 className="footwearHeading">Trending in Footwear</h4>
      <div className="footwear">
        <Card img={fw1} />
        <Card img={fw2} />
        <Card img={fw3} />
        <Card img={fw4} />
        <Card img={fw5} />
      </div>
      <div className="footwear">
        <Card img={fw6} />
        <Card img={fw7} />
        <Card img={fw8} />
        <Card img={fw9} />
        <Card img={fw10} />
      </div>
    </>
  );
}
