/**
* Dashboard of the landing page
* Gives the card component of the images in Luxe category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React, { useEffect } from 'react';
import './luxe.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card';
import { getLuxe } from '../../../service/offerService';
import { luxe } from '../../../actions/userActions';

export default function Luxe() {
  const dispatch = useDispatch();

  useEffect(() => {
    getLuxe().then((res) => {
      dispatch(luxe(res));
    }).catch(() => {
    });
  }, []);

  const isluxe = useSelector((state) => state.login.luxe);

  return (
    <>
      <h4 className="heading">Myntra Luxe</h4>
      <div className="luxe">
        { Object.keys(isluxe).length !== 0 ? isluxe.map((item) => (
          <Card
            img={`http://localhost:1337${item.attributes.Image.data.attributes.url}`}
            pageLink={`/luxe/${item.id}`}
          />
        )) : null }
      </div>
    </>
  );
}
