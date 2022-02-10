/**
* Dashboard of the landing page
* Gives the card component of the images in Indian Wear category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React, { useEffect } from 'react';
import './indianWear.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card';
import iw6 from '../../../assets/iw_6.webp';
import iw7 from '../../../assets/iw_7.webp';
import iw8 from '../../../assets/iw_8.webp';
import iw9 from '../../../assets/iw_9.webp';
import iw10 from '../../../assets/iw_10.webp';
import { getIndianWear } from '../../../service/offerService';
import { indianWear } from '../../../actions/userActions';

export default function IndianWear() {
  const dispatch = useDispatch();

  useEffect(() => {
    getIndianWear().then((res) => {
      dispatch(indianWear(res));
    }).catch(() => {
    });
  }, []);

  const isIndian = useSelector((state) => state.login.indianWear);
  return (
    <>
      <h4 className="indianwearHeading">Trending in Indian Wear</h4>
      <div className="indianWear">
        { Object.keys(isIndian).length !== 0 ? isIndian.map((item) => (
          <Card
            img={`http://localhost:1337${item.attributes.Image.data.attributes.url}`}
            pageLink={`/indianWear/${item.id}`}
          />
        )) : null }
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
