/**
* Dashboard of the landing page
* Gives the card component of the images in Sports Wear category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React, { useEffect } from 'react';
import './sportsWear.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card';
import { sportsWear } from '../../../actions/userActions';
import { getSportsWear } from '../../../service/offerService';

export default function SportsWear() {
  const dispatch = useDispatch();

  useEffect(() => {
    getSportsWear().then((res) => {
      dispatch(sportsWear(res));
    }).catch(() => {
    });
  }, []);

  const isSports = useSelector((state) => state.login.sports);

  return (
    <>
      <h4 className="sportswearHeading">Trending in Sports Wear</h4>
      <div className="sportswear">
        { Object.keys(isSports).length !== 0 ? isSports.map((item) => (
          <Card
            img={`http://localhost:1337${item.attributes.Image.data.attributes.url}`}
            pageLink={`/sports/${item.id}`}
          />
        )) : null }
      </div>
    </>
  );
}
