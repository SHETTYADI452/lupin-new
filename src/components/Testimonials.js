import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';
import './Testimonials.css';

const Testimonials = ({ testimonials }) => {
  return (
    <BootstrapCarousel>
      {testimonials.map((testimonial) => (
        <BootstrapCarousel.Item key={testimonial.id}>
          <div className="testimonial-card">
            <img src={testimonial.Profile.data.attributes.url} alt="Profile" />
            <h3>{testimonial.Name}</h3>
            <p>{testimonial.Designation}</p>
            <p>{testimonial.Experience}</p>
          </div>
        </BootstrapCarousel.Item>
      ))}
    </BootstrapCarousel>
  );
};

export default Testimonials;
