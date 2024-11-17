import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";
import TestimonialsList from "./TestimonialsList";
import QuotesIcon from "../assets/images/quotes.svg";

const Testimonials = () => {
  useContext(DarkModeContext);

  return (
    <section id="testimonials">
      <div className="container">
        <div id="clients">
          <h1 id="testimonialsHeading">Clients are Loving Our App</h1>
          <TestimonialsList quotesIcon={QuotesIcon} />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
