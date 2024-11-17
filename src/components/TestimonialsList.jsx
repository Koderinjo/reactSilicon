import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import TestimonialsItem from "./TestimonialsItem";

const TestimonialsList = ({ quotesIcon }) => {
  const [testimonialsItems, setTestimonialsItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTestimonialsData = async () => {
      try {
        const res = await fetch(
          "https://win24-assignment.azurewebsites.net/api/testimonials",
        );
        if (!res.ok) {
          throw new Error("Failed to fetch testimonials");
        }
        const data = await res.json();
        setTestimonialsItems(data);
      } catch (error) {
        console.error("Error fetching testimonials data:", error);
        setError("Unable to load testimonials at this time.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonialsData();
  }, []);

  if (isLoading) {
    return <p>Loading testimonials...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="testimonials">
      {testimonialsItems.map((item) => (
        <TestimonialsItem key={item.id} item={item} quotesIcon={quotesIcon} />
      ))}
    </div>
  );
};

TestimonialsList.propTypes = {
  quotesIcon: PropTypes.string.isRequired, // Changed to string
};

export default TestimonialsList;
