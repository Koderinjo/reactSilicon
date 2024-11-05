import React from 'react';

const DesktopSection = () => (
  <section id="only-desktop">
    <div className="container">
      <div id="all-grid">
        <div id="top-left">
          <h2>Make your money transfer simple and clear</h2>
          <ul className="checklist">
            {['Banking transactions are free for you', 'No monthly cash commission', 'Manage payments and transactions online'].map((text, index) => (
              <li key={index}><i className="fa-sharp fa-regular fa-circle-check" style={{ color: '#6366f1' }}></i>{text}</li>
            ))}
          </ul>
          <a id="learn-more" href="#" className="btn-primary">
            <span>Learn more</span>
            <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <img id="spending-img" src="/images/spending right.svg" alt="Picture of spending" />
        <img id="contact-img" src="/images/contacts left.svg" alt="Picture of spending" />
        <div id="bottom-right">
          <h2>Receive payment from international bank details</h2>
          <div id="cards">
            {['icon-card.svg', 'icon-cash.svg'].map((icon, index) => (
              <div key={index} className="icon-card">
                <div className="icon-box">
                  <img src={`/images/${icon}`} alt={`Icon ${icon}`} />
                </div>
                <p>Manage your payments online. Mollis congue egestas.</p>
              </div>
            ))}
          </div>
          <a id="learn-more" href="#" className="btn-primary">
            <span>Learn more</span>
            <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default DesktopSection;
