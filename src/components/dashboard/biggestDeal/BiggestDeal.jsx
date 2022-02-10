/**
* Dashboard of the landing page
* Gives the card component of the images in Biggest Deal category
* @returns the card with images as prop
* @author Sanjana Rao
*/
import React, { useEffect } from 'react';
import './biggestDeal.css';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../Card';
import bigd6 from '../../../assets/bigd_6.webp';
import bigd7 from '../../../assets/bigd_7.webp';
import bigd8 from '../../../assets/bigd_8.webp';
import bigd9 from '../../../assets/bigd_9.jpg';
import bigd10 from '../../../assets/bigd_10.webp';
import { getBrandsImage } from '../../../service/offerService';
import { topBrandsExplore } from '../../../actions/userActions';

export default function BiggestDeal() {
  const dispatch = useDispatch();

  useEffect(() => {
    getBrandsImage().then((res) => {
      dispatch(topBrandsExplore(res));
    }).catch(() => {
    });
  }, []);

  const isTopBrands = useSelector((state) => state.login.topBrands);

  return (
    <>
      <h4 className="biggestdealHeading">Biggest Deal on Top Brands</h4>
      <div className="biggestdeal">
        { Object.keys(isTopBrands).length !== 0 ? isTopBrands.map((item) => (
          <div className="second">
            <Card
              img={`http://localhost:1337${item.attributes.Image.data.attributes.url}`}
              pageLink={`/biggestDeal/${item.id}`}
            />
          </div>
        )) : null }
      </div>
      <div className="biggestdealSecond">
        <Card img={bigd6} />
        <Card img={bigd7} />
        <Card img={bigd8} />
        <Card img={bigd9} />
        <Card img={bigd10} />
      </div>
    </>
  );
}
