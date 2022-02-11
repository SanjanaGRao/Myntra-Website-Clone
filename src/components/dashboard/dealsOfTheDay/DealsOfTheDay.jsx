/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/**
* Dashboard of the landing page
* Gives the card component of the images in Deals Of The Day category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React, { useEffect } from 'react';
import './dealsOfTheDay.css';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../Card';
import { getTopBrandsImage } from '../../../service/offerService';
import { topBrands } from '../../../actions/userActions';

export default function DealsOfTheDay() {
  const dispatch = useDispatch();

  useEffect(() => {
    getTopBrandsImage().then((res) => {
      dispatch(topBrands(res));
    }).catch(() => {
    });
  }, []);

  const isBrands = useSelector((state) => state.login.brands);

  return (
    <>
      <h4 className="dealsofdayHeading">Deals of the Day</h4>
      <div className="dealsofday">
        { Object.keys(isBrands).length !== 0 ? isBrands.map((item) => (
          <Cards
            img={`http://localhost:1337${item.attributes.Image.data.attributes.url}`}
            pageLink={`/dealsOfDay/${item.id}`}
          />
        )) : null }
      </div>
    </>
  );
}
