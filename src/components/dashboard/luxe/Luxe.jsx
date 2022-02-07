/**
* Dashboard of the landing page
* Gives the card component of the images in Luxe category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React from 'react';
import './luxe.css';
import Card from '../Card';
import img1 from '../../../assets/luxe_1.webp';
import img2 from '../../../assets/luxe_2.webp';
import img3 from '../../../assets/luxe_3.webp';
import img4 from '../../../assets/luxe_4.webp';
import img5 from '../../../assets/luxe_5.webp';
import img6 from '../../../assets/luxe_6.webp';

export default function Luxe() {
  return (
    <>
      <h4 className="heading">Myntra Luxe</h4>
      <div className="luxe">
        <Card img={img1} />
        <Card img={img2} />
        <Card img={img3} />
        <Card img={img4} />
        <Card img={img5} />
        <Card img={img6} />
      </div>
    </>
  );
}
