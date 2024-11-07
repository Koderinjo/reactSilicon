import React, { useState } from 'react';
import Notification from '../assets/images/notification.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
    } else {
      setError('');
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
    if (error) setError('');
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
            <h4>Subscribe to our newsletter to stay informed about the latest updates</h4>
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
              onBlur={validateEmail}
            />
            <button className="subscribe-button">Subscribe</button>
            {error && <div className="error-message">{error}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
