import React from 'react';
import AccordionItem from './AccordionItem';

const FAQItem = ({ faq }) => {
  return (
    <AccordionItem title={faq.title} content={faq.content} />
  );
};

export default FAQItem;
