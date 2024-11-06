import React from 'react';
import SpendingRight from '../assets/images/spending right.svg';
import ContactsLeft from '../assets/images/contacts left.svg';
import IconCard from '../assets/images/icon-card.svg';
import IconCash from '../assets/images/icon-cash.svg';

const DesktopSection = () => (
  <section id="only-desktop">
    <div className="container">
      <div id="all-grid">
        <div id="top-left">
          <h2>Make your money transfer simple and clear</h2>
          <ul className="checklist">
            {['Banking transactions are free for you', 'No monthly cash commission', 'Manage payments and transactions online'].map((text, index) => (
              <li key={index}>
                <i className="fa-sharp fa-regular fa-circle-check" style={{ color: '#6366f1' }}></i>
                {text}
              </li>
            ))}
          </ul>
          <a id="learn-more" href="#" className="btn-primary">
            <span>Learn more</span>
            <i className="fa-sharp fa-solid fa-arrow-right"></i>
          </a>
        </div>
        
        <img id="spending-img" src={SpendingRight} alt="Picture of spending" />
        <img id="contact-img" src={ContactsLeft} alt="Picture of contacts" />
        
        <div id="bottom-right">
          <h2>Receive payment from international bank details</h2>
          <div id="cards">
            {/* Render each icon directly without mapping */}
            <div className="icon-card">
              <div className="icon-box">
                <img src={IconCard} alt="Icon Card" />
              </div>
              <p>Manage your payments online. Mollis congue egestas.</p>
            </div>
            
            <div className="icon-card">
              <div className="icon-box">
                <img src={IconCash} alt="Icon Cash" />
              </div>
              <p>Manage your payments online. Mollis congue egestas.</p>
            </div>
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
