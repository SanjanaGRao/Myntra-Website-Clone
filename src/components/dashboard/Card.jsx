/**
* Dashboard of the landing page
* Gives the card component of the images in each category
* Common to all sub components
* @param img is passed as a prop from other components
* @returns the card with images as prop
* @author Sanjana Rao
*/

import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Card({ img, pageLink }) {
  return (
    <div className="card">
      <Link to={pageLink}>
        <img src={img} alt="card" />
      </Link>
    </div>
  );
}
Card.propTypes = {
  img: PropTypes.string.isRequired,
  pageLink: PropTypes.string.isRequired,
};
