import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './imageSlider.css';
import slide1 from '../assets/image_1.jpg';
import slide2 from '../assets/image_1.webp';
import slide3 from '../assets/image_3.webp';
import slide4 from '../assets/image_4.webp';
import slide5 from '../assets/image_5.webp';
import slide6 from '../assets/image_6.webp';
import slide7 from '../assets/image_7.webp';

export default function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
  /* eslint-disable react/jsx-props-no-spreading */
    <Slider {...settings} className="slider">
      <div className="wrap">
        <Link to="/women">
          <img src={slide1} alt="slide_1" />
        </Link>
      </div>
      <div className="wrap">
        <Link to="/beauty">
          <img src={slide2} alt="slide_2" />
        </Link>
      </div>
      <div className="wrap">
        <Link to="/men">
          <img src={slide3} alt="slide_3" />
        </Link>
      </div>
      <div className="wrap">
        <Link to="/men">
          <img src={slide4} alt="slide_4" />
        </Link>
      </div>
      <div className="wrap">
        <Link to="/women">
          <img src={slide5} alt="slide_5" />
        </Link>
      </div>
      <div className="wrap">
        <Link to="/beauty">
          <img src={slide6} alt="slide_6" />
        </Link>
      </div>
      <div className="wrap">
        <Link to="/men">
          <img src={slide7} alt="slide_7" />
        </Link>
      </div>
    </Slider>
  );
}
