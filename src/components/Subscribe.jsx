import { useState } from "react";
import Notification from "../assets/images/notification.svg";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (message.text) {
      setMessage({ type: "", text: "" });
    }
  };

  const handleSubscribe = async () => {
    if (!validateEmail(email)) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(
        "https://win24-assignment.azurewebsites.net/api/forms/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        },
      );

      if (response.ok) {
        setMessage({ type: "success", text: "You are now subscribed!" });
        setEmail("");
      } else {
        const errorData = await response.json();
        setMessage({
          type: "error",
          text: errorData.message || "An error occurred during subscription.",
        });
      }
    } catch {
      setMessage({
        type: "error",
        text: "An error occurred during subscription.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="Subscribe">
      <div className="container">
        <div className="background-card">
          <div id="bell">
            <img src={Notification} alt="Notification Bell" />
          </div>
          <div className="sub-text">
            <h2>Subscribe to our newsletter</h2>
          </div>
          <div className="sub-text-desktop">
            <h4>
              Subscribe to our newsletter to stay informed about the latest
              updates
            </h4>
          </div>
          <div className="subscribe-container">
            <div className="icon-wrapper">
              <i className="fa-sharp fa-regular fa-envelope"></i>
            </div>
            <input
              type="email"
              placeholder="Your email"
              className="subscribe-input"
              value={email}
              onChange={handleInputChange}
            />
            <button
              className="subscribe-button"
              onClick={handleSubscribe}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </button>
            {message.text && (
              <div className={`${message.type}-message`}>{message.text}</div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
