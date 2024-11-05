import React, { useContext } from 'react';
import { DarkModeContext } from '../App';

const Testimonials = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section id="testimonials">
      <div className="container">
        <div id="clients">
          <h1>Clients are Loving Our App</h1>
          <img
            src={isDarkMode ? '/images/testimonials-dark.svg' : '/images/testimonials.svg'}
            alt="Testimonials"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
