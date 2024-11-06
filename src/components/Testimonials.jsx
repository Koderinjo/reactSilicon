import React, { useContext } from 'react';
import { DarkModeContext } from '../App';
import TestimonialsDark from '../assets/images/testimonials-dark.svg';
import TestimonialsLight from '../assets/images/testimonials.svg';

const Testimonials = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section id="testimonials">
      <div className="container">
        <div id="clients">
          <h1>Clients are Loving Our App</h1>
          <img src={isDarkMode ? TestimonialsDark : TestimonialsLight} alt="Testimonials" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
