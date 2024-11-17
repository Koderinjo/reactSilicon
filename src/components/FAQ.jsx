import React, { useContext } from 'react';
import { DarkModeContext } from '../App';
import FAQList from './FAQList';



import IconBoxPhoneDark from '../assets/images/icon-box-phone-dark.svg';
import IconBoxPhoneLight from '../assets/images/icon-box-phone.svg';
import IconBoxMessageDark from '../assets/images/icon-box-message-dark.svg';
import IconBoxMessageLight from '../assets/images/icon-box-message.svg';
import IconBoxPhoneTabletDark from '../assets/images/icon-box-phone-tablet-dark.svg';
import IconBoxPhoneTabletLight from '../assets/images/icon-box-phone-tablet.svg';
import IconBoxMessageTabletDark from '../assets/images/icon-box-message-tablet-dark.svg';
import IconBoxMessageTabletLight from '../assets/images/icon-box-message-tablet.svg';

const FAQ = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section id="FAQ">
      <div className="container">
        <div className="faq-contact">
          <div className="text">
            <h2>Any questions? Check out the FAQs</h2>
            <p>Still have unanswered questions and need to get in touch?</p>
          </div>
          <div className="contact-boxes-desktop">
            <div id="icon-box-phone">
              <a href="#">
                <img
                  src={isDarkMode ? IconBoxPhoneDark : IconBoxPhoneLight}
                  alt="Contact us - Phone"
                />
              </a>
            </div>
            <div id="icon-box-message">
              <a href="#">
                <img
                  src={isDarkMode ? IconBoxMessageDark : IconBoxMessageLight}
                  alt="Contact us - Message"
                />
              </a>
            </div>
          </div>
        </div>
        
        <FAQList />

        <div className="contact-boxes-tablet">
          <div id="icon-box-phone-tablet">
            <a href="#">
              <img
                src={isDarkMode ? IconBoxPhoneTabletDark : IconBoxPhoneTabletLight}
                alt="Contact us - Phone"
              />
            </a>
          </div>
          <div id="icon-box-message-tablet">
            <a href="#">
              <img
                src={isDarkMode ? IconBoxMessageTabletDark : IconBoxMessageTabletLight}
                alt="Contact us - Message"
              />
            </a>
          </div>
        </div>

        <div className="contact-boxes-mobile">
          <a href="#" id="contact-us" className="btn-primary">
            <span>Contact us now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
