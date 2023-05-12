/**
* Dashboard of the landing page
* Gives the carousel of the images in the dashboard
* @returns image carousel
* @author Sanjana Rao
*/
import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import './imageSlider.css';
import CarouselData from './images';

export default function ImageSlider() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        className="carousel"
        infiniteLoop
        useKeyboardArrows
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        {
          CarouselData.map((image) => (
            <div>
              <img
                className="carousel-image"
                src={image}
                alt="carousel"
                style={{ maxWidth: 'inherit' }}
              />
            </div>
          ))
        }
      </Carousel>
    </div>
  );
}
