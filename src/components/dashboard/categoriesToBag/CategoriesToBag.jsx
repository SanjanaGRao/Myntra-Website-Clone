/* eslint-disable no-unused-vars */
/**
* Dashboard of the landing page
* Gives the card component of the images in Categories To Bag category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React, { useEffect } from 'react';
import './categoriesToBag.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card';
import categories7 from '../../../assets/categories_7.webp';
import categories8 from '../../../assets/categories_8.webp';
import categories9 from '../../../assets/categories_9.webp';
import categories10 from '../../../assets/categories_10.webp';
import categories11 from '../../../assets/categories_11.webp';
import categories12 from '../../../assets/categories_12.webp';
import { getCategoriesToBag } from '../../../service/offerService';
import { categoriesToBag } from '../../../actions/userActions';

export default function CategoriesToBag() {
  const dispatch = useDispatch();

  useEffect(() => {
    getCategoriesToBag().then((res) => {
      dispatch(categoriesToBag(res));
    }).catch(() => {
    });
  }, []);

  const isCategoriesToBag = useSelector((state) => state.login.categories);

  return (
    <>
      <h4 className="bagHeading">Categories to Bag</h4>
      <div className="bag">
        { Object.keys(isCategoriesToBag).length !== 0 ? isCategoriesToBag.map((item) => (
          <Card
            img={`http://localhost:1337${item.attributes.Image.data.attributes.url}`}
            pageLink={`/categoriesToBag/${item.id}`}
          />
        )) : null }
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
