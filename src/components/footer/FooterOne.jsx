/**
* Footer of the Myntra Website
* This is the first footer component
* @returns the first half of the footer component to FooterMain function
* @author Sanjana Rao
*/
import React from 'react';
import './footerOne.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import mobile from '../../assets/mobile.png';
import returnOrder from '../../assets/return.png';
import original from '../../assets/original.png';

export default function FooterOne() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footerFirst">
        <div className="footerFirstOne">
          <h5 className="footerHeading">Online Shopping</h5>
          <li className="footerItems">
            <a href="/men">Men</a>
          </li>
          <li className="footerItems">
            <a href="/women">Women</a>
          </li>
          <li className="footerItems">
            <a href="/kids">Kids</a>
          </li>
          <li className="footerItems">
            <a href="/home">Home & Living</a>
          </li>
          <li className="footerItems">
            <a href="/beauty">Beauty</a>
          </li>
          <li className="footerItems">
            <a href="/studio">Cards</a>
          </li>
          <li className="footerItems">
            <a href="/profile">
              Myntra Insider
              {' '}
              <span className="footerItemsSpan">New</span>
            </a>
          </li>
        </div>
        <div className="footerFirstOne">
          <h5 className="footerHeading">Useful Links</h5>
          <div className="footerItems">
            <span>Contact Us</span>
          </div>
          <div className="footerItems">
            <span>FAQ</span>
          </div>
          <div className="footerItems">
            <span>T&C</span>
          </div>
          <div className="footerItems">
            <span>Terms of use</span>
          </div>
          <div className="footerItems">
            <span>Track orders</span>
          </div>
          <div className="footerItems">
            <span>Shipping</span>
          </div>
          <div className="footerItems">
            <span>Cancellation</span>
          </div>
          <div className="footerItems">
            <span>Returns</span>
          </div>
          <div className="footerItems">
            <span>Whitehat</span>
          </div>
          <div className="footerItems">
            <span>Blogs</span>
          </div>
          <div className="footerItems">
            <span>Careers</span>
          </div>
          <div className="footerItems">
            <span>Privavy Policy</span>
          </div>
          <div className="footerItems">
            <span>Site Map</span>
          </div>
        </div>
        <div className="footerFirstOne">
          <h5 className="footerHeading">Experience Myntra App on Mobile</h5>
          <div className="footerImg">
            <img src={mobile} alt="demo" className="demo" />
          </div>
          <h5 className="footerHeading">Keep in Touch</h5>

          <span>
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />
            <InstagramIcon />
          </span>
        </div>
        <div className="footerSecond">
          <div className="insideFooterSecond">
            <img src={original} alt="original" />
            <div>
              <p>
                <span>100% ORIGINAL</span>
                {' '}
                gurantee
              </p>
              <p>for all products at myntra.com</p>
            </div>
          </div>
          <div className="insideFooterSecond">
            <img src={returnOrder} alt="original" />
            <div>
              <p>
                <span>Return within 30 days</span>
                {' '}
                gurantee
              </p>
              <p>for all products at myntra.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerMiddle">
        <h5 className="footerHeadingFooterMiddleHead">
          Popular Searches
        </h5>
        <a href="/beauty" className="footerMiddleLinks">Makeup</a>
        {' '}
        <span> | </span>
        <a href="/kids" className="footerMiddleLinks">Dressers For Girls</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footerMiddleLinks">T-Shirts</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Sandles</a>
        {' '}
        <span> | </span>
        <a href="/kids" className="footerMiddleLinks">Babydolls</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footerMiddleLinks">Blazer For Men</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Handbags</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Ladies Watches</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footerMiddleLinks">Bags</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Sport Shoes</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footerMiddleLinks">Reebok Shoes</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Puma</a>
        {' '}
        <a href="/men" className="footerMiddleLinks">Shoes</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footerMiddleLinks">Boxers</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footerMiddleLinks">Wallets</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Tops</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Earrings</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Fastrack Watches</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Kurtis </a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Nike</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footerMiddleLinks">Smart Watches</a>
        {' '}
        <span> | </span>
        <a href="/kids" className="footerMiddleLinks">Titan Watches</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Designer Blouse</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Gowns</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Rings</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footerMiddleLinks">Cricket Shoes</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footerMiddleLinks">Eye Makeup</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footerMiddleLinks">Photo Frame</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footerMiddleLinks">String Lights</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footerMiddleLinks">Clocks</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footerMiddleLinks">Candles</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footerMiddleLinks">Mirrors</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footerMiddleLinks">Carpets</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footerMiddleLinks">Perfume</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footerMiddleLinks">Shampoo</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footerMiddleLinks">Eye Makeup</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footerMiddleLinks">Kajal</a>
        {' '}
        <a href="/men" className="footerMiddleLinks">Woodlands Shoes</a>
        {' '}
        <span> | </span>
        <a href="/kids" className="footerMiddleLinks">Pokemon</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Saree</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footerMiddleLinks">Skincare</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footerMiddleLinks">Lipstick</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footerMiddleLinks">Curtains</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footerMiddleLinks">Goggles</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footerMiddleLinks">Jewellery</a>
        {' '}
        <span> | </span>
        <a href="/kids" className="footerMiddleLinks">Socks</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footerMiddleLinks">Fountains</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footerMiddleLinks">Compact</a>

        <div className="footerMiddlePara">
          <p>
            In case of any concern,
            <span>&nbsp;Contact Us&nbsp;</span>
          </p>
          <p>
            &copy;
            {year}
            {' '}
            www.myntra.com.&nbsp;All rights reserved.
          </p>
        </div>
        <hr />
        <div className="footerLast">
          <div>
            <h5 className="footerHeading">Registered Office Address</h5>
            <span color="#696b79">Building Alyssa,</span>
            <br />
            <span color="#696b79">Begonia and Clover situated in Embassy Tech Village,</span>
            <br />
            <span color="#696b79">Outer Ring Road,</span>
            <br />
            <span color="#696b79">Devarabeesanahalli Village,</span>
            <br />
            <span color="#696b79">Varthur Hobli,</span>
            <br />
            <span color="#696b79">Bengaluru - 560130, India</span>
          </div>
          <div className="footerLastInside">
            <p>CIN: U72300KA2007PTC041799</p>
            <p>
              Telephone:
              <span>+91-80-61561999</span>
            </p>
          </div>
        </div>
        <br />
        <br />
        <hr />
      </div>
    </div>
  );
}
