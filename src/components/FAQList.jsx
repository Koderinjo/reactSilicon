import { useEffect, useState } from "react";
import FAQItem from "./FAQItem";

const FAQList = () => {
  const [faqItems, setFaqItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFAQData = async () => {
      try {
        const res = await fetch(
          "https://win24-assignment.azurewebsites.net/api/faq",
        );
        if (!res.ok) {
          throw new Error("Failed to fetch FAQs");
        }
        const data = await res.json();
        setFaqItems(data);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
        setError("Unable to load FAQs at this time.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFAQData();
  }, []);

  if (isLoading) {
    return <p>Loading FAQs...</p>;
  }

  if (error) {
    return <p className="error">{error}</p>;
  }

  return (
    <div className="accordion-container">
      {faqItems.map((faq) => (
        <FAQItem key={faq.id} faq={faq} />
      ))}
    </div>
  );
};

export default FAQList;
