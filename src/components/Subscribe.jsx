import React, { useState } from 'react';
import Notification from '../assets/images/notification.svg';

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');

      setTimeout(() => {
        setError('');
      }, 2500);
    } else {
      setError('');
      
    }
  };

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInputFocus = () => {
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSubscribe = async () => {
    validateEmail();
    if (error || !email) return;

    try {
      const response = await fetch('https://win24-assignment.azurewebsites.net/api/forms/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccess('You are now subscribed!');
        setEmail('');

        setTimeout(() => {
          setSuccess('');
        }, 2500);
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'An error occurred during subscription.');
      }
    } catch (err) {
      setError('An error occurred during subscription.');
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
              onFocus={handleInputFocus}
            />
            <button className="subscribe-button" onClick={handleSubscribe}>
              Subscribe
            </button>
            {error && <div className="error-message">{error}</div>}
            {success && <div className="success-message">{success}</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
