/**
* Dashboard of the landing page
* Gives the card component of the images in Footwear category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React, { useEffect } from 'react';
import './footwear.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card';
import fw1 from '../../../assets/fw_1.webp';
import fw2 from '../../../assets/fw_2.jpg';
import fw3 from '../../../assets/fw_3.webp';
import fw4 from '../../../assets/fw_4.webp';
import fw5 from '../../../assets/fw_5.webp';
import { getFootwear } from '../../../service/offerService';
import { footwear } from '../../../actions/userActions';

export default function Footwear() {
  const dispatch = useDispatch();

  useEffect(() => {
    getFootwear().then((res) => {
      dispatch(footwear(res));
    }).catch(() => {
    });
  }, []);

  const isFootwear = useSelector((state) => state.login.footwear);
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
        { Object.keys(isFootwear).length !== 0 ? isFootwear.map((item) => (
          <Card
            img={`http://localhost:1337${item.attributes.Image.data.attributes.url}`}
            pageLink={`/footwear/${item.id}`}
          />
        )) : null }
      </div>
    </>
  );
}
