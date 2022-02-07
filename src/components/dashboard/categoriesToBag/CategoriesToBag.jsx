/**
* Dashboard of the landing page
* Gives the card component of the images in Categories To Bag category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React from 'react';
import './categoriesToBag.css';
import Card from '../Card';
import categories1 from '../../../assets/categories_1.webp';
import categories2 from '../../../assets/categories_2.webp';
import categories3 from '../../../assets/categories_3.webp';
import categories4 from '../../../assets/categories_4.webp';
import categories5 from '../../../assets/categories_5.webp';
import categories6 from '../../../assets/categories_6.webp';
import categories7 from '../../../assets/categories_7.webp';
import categories8 from '../../../assets/categories_8.webp';
import categories9 from '../../../assets/categories_9.webp';
import categories10 from '../../../assets/categories_10.webp';
import categories11 from '../../../assets/categories_11.webp';
import categories12 from '../../../assets/categories_12.webp';

export default function CategoriesToBag() {
  return (
    <>
      <h4 className="bagHeading">Categories to Bag</h4>
      <div className="bag">
        <Card img={categories1} />
        <Card img={categories2} />
        <Card img={categories3} />
        <Card img={categories4} />
        <Card img={categories5} />
        <Card img={categories6} />
      </div>
      <div className="biggestdealsecond">
        <Card img={categories7} />
        <Card img={categories8} />
        <Card img={categories9} />
        <Card img={categories10} />
        <Card img={categories11} />
        <Card img={categories12} />
      </div>
    </>
  );
}
