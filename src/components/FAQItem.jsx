import PropTypes from "prop-types";
import AccordionItem from "./AccordionItem";

const FAQItem = ({ faq }) => {
  return <AccordionItem title={faq.title} content={faq.content} />;
};

FAQItem.propTypes = {
  faq: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
};

export default FAQItem;
