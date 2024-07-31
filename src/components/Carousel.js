import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

const Carousel = ({ images }) => {
  const BASE_URL = 'http://localhost:1337'; 
  // Ensure images is an array
  if (!Array.isArray(images)) {
    console.error('Invalid images prop: Expected an array');
    return null; // or some fallback UI
  }

  return (
    <BootstrapCarousel>
      {images.map((image) => (
        <BootstrapCarousel.Item key={image.id}>
          <img className="d-block w-100" src={`${BASE_URL}${image.attributes.url}`}  alt="Slide" />
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};

// Prop validation
Carousel.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    })
  ).isRequired
};

export default Carousel;
