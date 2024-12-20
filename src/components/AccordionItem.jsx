import { useState } from "react";
import PropTypes from "prop-types";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "active" : ""}`}>
      <button className="accordion-header" onClick={toggleAccordion}>
        {title}
        <span className="btn-circle">
          <i className={`fa-solid fa-chevron-${isOpen ? "up" : "down"}`}></i>
        </span>
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default AccordionItem;
