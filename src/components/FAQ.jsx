// components/FAQ.js
import React, { useContext } from 'react';
import { DarkModeContext } from '../App';
import AccordionItem from './AccordionItem';

const faqData = [
  { title: "Is any of my personal information stored in the App?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
  { title: "What formats can I download my transaction history in?", content: "Soluta perspiciatis amet corrupti omnis eaque." },
  { title: "Can I schedule future transfers?", content: "Nunc duis id aenean gravida tincidunt eu." },
  { title: "When can I use Banking App services?", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." },
  { title: "Can I create my own password that is easy for me to remember?", content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit." },
  { title: "What happens if I forget or lose my password?", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit." }
];

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
                  src={isDarkMode ? '/images/icon-box-phone-dark.svg' : '/images/icon-box-phone.svg'}
                  alt="Contact us - Phone"
                />
              </a>
            </div>
            <div id="icon-box-message">
              <a href="#">
                <img
                  src={isDarkMode ? '/images/icon-box-message-dark.svg' : '/images/icon-box-message.svg'}
                  alt="Contact us - Message"
                />
              </a>
            </div>
          </div>


        </div>
        <div className="accordion-container">
          {faqData.map((faq, index) => (
            <AccordionItem key={index} title={faq.title} content={faq.content} />
          ))}
        </div>
          <div className="contact-boxes-tablet">
            <div id="icon-box-phone-tablet">
              <a href="#">
                <img
                  src={isDarkMode ? '/images/icon-box-phone-tablet-dark.svg' : '/images/icon-box-phone-tablet.svg'}
                  alt="Contact us - Phone"
                />
              </a>
            </div>
            <div id="icon-box-message-tablet">
              <a href="#">
                <img
                  src={isDarkMode ? '/images/icon-box-message-tablet-dark.svg' : '/images/icon-box-message-tablet.svg'}
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
