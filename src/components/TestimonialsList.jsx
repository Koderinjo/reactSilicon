import React, { useEffect, useState } from 'react';
import TestimonialsItem from './TestimonialsItem';

const TestimonialsList = ({ quotesIcon }) => {
  const [testimonialsItems, setTestimonialsItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://win24-assignment.azurewebsites.net/api/testimonials');
      const data = await res.json();
      setTestimonialsItems(data);
    };
    fetchData();
  }, []);

  return (
    <div className="testimonials">
      {testimonialsItems.map((item) => (
        <TestimonialsItem key={item.id} item={item} quotesIcon={quotesIcon} />
      ))}
    </div>
  );
};

export default TestimonialsList;
