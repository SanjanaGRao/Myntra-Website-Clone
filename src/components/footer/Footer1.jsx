import React from 'react';
import './footer1.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import mobile from '../assets/mobile.png';
import returnOrder from '../assets/return.png';
import original from '../assets/original.png';

export default function Footer1() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="footer_first">
        <div className="footer_first_one">
          <h5 className="footer_heading">Online Shopping</h5>
          <li className="footer_items">
            <a href="/men">Men</a>
          </li>
          <li className="footer_items">
            <a href="/women">Women</a>
          </li>
          <li className="footer_items">
            <a href="/kids">Kids</a>
          </li>
          <li className="footer_items">
            <a href="/home">Home & Living</a>
          </li>
          <li className="footer_items">
            <a href="/beauty">Beauty</a>
          </li>
          <li className="footer_items">
            <a href="/studio">Cards</a>
          </li>
          <li className="footer_items">
            <a href="/profile">
              Myntra Insider
              {' '}
              <span className="footer_items_span">New</span>
            </a>
          </li>
        </div>
        <div className="footer_first_one">
          <h5 className="footer_heading">Useful Links</h5>
          <div className="footer_items">
            <span>Contact Us</span>
          </div>
          <div className="footer_items">
            <span>FAQ</span>
          </div>
          <div className="footer_items">
            <span>T&C</span>
          </div>
          <div className="footer_items">
            <span>Terms of use</span>
          </div>
          <div className="footer_items">
            <span>Track orders</span>
          </div>
          <div className="footer_items">
            <span>Shipping</span>
          </div>
          <div className="footer_items">
            <span>Cancellation</span>
          </div>
          <div className="footer_items">
            <span>Returns</span>
          </div>
          <div className="footer_items">
            <span>Whitehat</span>
          </div>
          <div className="footer_items">
            <span>Blogs</span>
          </div>
          <div className="footer_items">
            <span>Careers</span>
          </div>
          <div className="footer_items">
            <span>Privavy Policy</span>
          </div>
          <div className="footer_items">
            <span>Site Map</span>
          </div>
        </div>
        <div className="footer_first_one">
          <h5 className="footer_heading">Experience Myntra App on Mobile</h5>
          <div className="footer_img">
            <img src={mobile} alt="demo" className="demo" />
          </div>
          <h5 className="footer_heading">Keep in Touch</h5>

          <span>
            <FacebookIcon />
            <TwitterIcon />
            <YouTubeIcon />
            <InstagramIcon />
          </span>
        </div>
        <div className="footer_second">
          <div className="inside_footer_second">
            <img src={original} alt="original" />
            <div>
              <p>
                <span style={{ fontFamily: 'Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>100% ORIGINAL</span>
                {' '}
                gurantee
              </p>
              <p style={{ fontFamily: 'Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>for all products at myntra.com</p>
            </div>
          </div>
          <div className="inside_footer_second">
            <img src={returnOrder} alt="original" />
            <div>
              <p>
                <span style={{ fontFamily: 'Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>Return within 30 days</span>
                {' '}
                gurantee
              </p>
              <p style={{ fontFamily: 'Whitney,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif' }}>for all products at myntra.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_middle">
        <h5 className="footer_heading footer_middle_head">
          Popular Searches
        </h5>
        <a href="/beauty" className="footer_middle_links">Makeup</a>
        {' '}
        <span> | </span>
        <a href="/kids" className="footer_middle_links">Dressers For Girls</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footer_middle_links">T-Shirts</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Sandles</a>
        {' '}
        <span> | </span>
        <a href="/kids" className="footer_middle_links">Babydolls</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footer_middle_links">Blazer For Men</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Handbags</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Ladies Watches</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footer_middle_links">Bags</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Sport Shoes</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footer_middle_links">Reebok Shoes</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Puma</a>
        {' '}
        <a href="/men" className="footer_middle_links">Shoes</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footer_middle_links">Boxers</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footer_middle_links">Wallets</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Tops</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Earrings</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Fastrack Watches</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Kurtis </a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Nike</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footer_middle_links">Smart Watches</a>
        {' '}
        <span> | </span>
        <a href="/kids" className="footer_middle_links">Titan Watches</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Designer Blouse</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Gowns</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Rings</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footer_middle_links">Cricket Shoes</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footer_middle_links">Eye Makeup</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footer_middle_links">Photo Frame</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footer_middle_links">String Lights</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footer_middle_links">Clocks</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footer_middle_links">Candles</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footer_middle_links">Mirrors</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footer_middle_links">Carpets</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footer_middle_links">Perfume</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footer_middle_links">Shampoo</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footer_middle_links">Eye Makeup</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footer_middle_links">Kajal</a>
        {' '}
        <a href="/men" className="footer_middle_links">Woodlands Shoes</a>
        {' '}
        <span> | </span>
        <a href="/kids" className="footer_middle_links">Pokemon</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Saree</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footer_middle_links">Skincare</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footer_middle_links">Lipstick</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footer_middle_links">Curtains</a>
        {' '}
        <span> | </span>
        <a href="/men" className="footer_middle_links">Goggles</a>
        {' '}
        <span> | </span>
        <a href="/women" className="footer_middle_links">Jewellery</a>
        {' '}
        <span> | </span>
        <a href="/kids" className="footer_middle_links">Socks</a>
        {' '}
        <span> | </span>
        <a href="/home" className="footer_middle_links">Fountains</a>
        {' '}
        <span> | </span>
        <a href="/beauty" className="footer_middle_links">Compact</a>

        <div className="footer_middle_para">
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
        <div className="footer_last">
          <div>
            <h5 className="footer_heading">Registered Office Address</h5>
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
          <div className="footer_last_inside">
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
