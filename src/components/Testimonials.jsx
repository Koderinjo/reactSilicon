import React, { useContext } from 'react';
import { DarkModeContext } from '../App';
import ServiceList from './TestimonialsList';
import QuotesIcon from '../assets/images/quotes.svg'; // Import the quotes icon

const Testimonials = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section id="testimonials">
      <div className="container">
        <div id="clients">
          <h1 id="testimonialsHeading">Clients are Loving Our App</h1>
          <ServiceList quotesIcon={QuotesIcon} /> {/* Pass icon to ServiceList */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
