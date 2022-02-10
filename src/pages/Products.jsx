/* eslint-disable react/button-has-type */
/**
* List of Products of certain category
* Currently, this is implemented only for the category - "Deals of The Day"
* @returns a product page which contains card and information of each product
* @author Sanjana Rao
*/
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './products.css';
import { Link, useParams } from 'react-router-dom';
import { Grid } from '@mui/material';
import Appbar from '../components/header/Appbar';
import ProductCard from '../components/productCard/ProductCard';
import getAllItems from '../service/productService';
import Footer from '../components/footer/FooterMain';
import setProducts from '../actions/itemsAction';

export default function Products() {
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    getAllItems(id).then((res) => {
      dispatch(setProducts(res));
    }).catch(() => {
    });
  }, []);
  const products = useSelector((state) => state.allItems.products);
  return (
    <>
      <Appbar />
      <div className="box">
        <div className="topText">
          <Link to="/">Home</Link>
          <span className="topTextSpan">/</span>
          <Link to="/jeansOffer"><b>Jeans</b></Link>
        </div>
        <div className="secondText">
          <span className="secondTextTitle"><b>Jeans Brands</b></span>
          <span className="grey"> - 3 items</span>
        </div>
        <div id="topProductContDiv">
          <div>
            <select name="" id="bundles">
              <option value="bundles">Bundles</option>
            </select>
          </div>

          <div>
            <select name="" id="contryOfOrigin">
              <option value="">Country Of Origin</option>
              <option value="india">India</option>
              <option value="all countries">All countries</option>
            </select>
          </div>

          <div className="size">
            <select name="">
              <option value="">Size</option>
              <option value="xsmall">Xtra Small</option>
              <option value="small">Small</option>
              <option value="midium">Medium</option>
              <option value="large">Large</option>
              <option value="xlarge">Xtra Large</option>
            </select>
          </div>
          <div className="dropdown">
            <button>
              Sort by :
              {' '}
              <strong>Recommended</strong>
            </button>
            <div className="dropdownContent">
              <option id="whatsnew">What&apos;s New</option>
              <option id="popularity">Popularity</option>
              <option id="betterDiscount">Better Discount</option>
              <option id="sortHightoLow">Price: High to Low</option>
              <option id="sortLowtoHigh">Price: Low to High</option>
              <option id="costomerRating">Customer Rating</option>
            </div>
          </div>
        </div>
        {products.length !== 0 ? (products.map((item) => (
          <Grid item xs={10} md={2.75} style={{ padding: '2.5em', display: 'inline-block' }}>
            <ProductCard item={item} id={id} />
          </Grid>
        ))) : null}
      </div>
      <Footer />
    </>
  );
}
