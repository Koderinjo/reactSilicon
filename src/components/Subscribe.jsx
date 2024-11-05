import React from 'react';

const Subscribe = () => (
  <section id="subscribe">
    <div className="container">
      <div className="background-card">
        <div id="bell">
          <img src="/images/notification.svg" alt="Notification Bell" />
        </div>
        <div className="sub-text">
          <h2>Subscribe to our newsletter</h2>
        </div>
        <div className="sub-text-desktop">
          <h4>Subscribe to our newsletter to stay informed about latest updates</h4>
        </div>
        <div className="subscribe-container">
          <div className="icon-wrapper">
            <i className="fa-sharp fa-regular fa-envelope"></i>
          </div>
          <input type="email" placeholder="Your email" className="subscribe-input" />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  </section>
);

export default Subscribe;
