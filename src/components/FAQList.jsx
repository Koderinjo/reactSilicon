// FAQList.jsx
import React, { useEffect, useState } from 'react';
import FAQItem from './FAQItem';

const FAQList = () => {
  const [faqItems, setFaqItems] = useState([]);

  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        const res = await fetch('https://win24-assignment.azurewebsites.net/api/faq');
        const data = await res.json();
        setFaqItems(data);
      } catch (error) {
        console.error('Error fetching FAQ data:', error);
      }
    };

    fetchFAQData();
  }, []);

  return (
    <div className="accordion-container">
      {faqItems.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </div>
  );
};

export default FAQList;
