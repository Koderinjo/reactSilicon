import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";
import FAQList from "./FAQList";
import {
  IconBoxPhoneDark,
  IconBoxPhoneLight,
  IconBoxMessageDark,
  IconBoxMessageLight,
  IconBoxPhoneTabletDark,
  IconBoxPhoneTabletLight,
  IconBoxMessageTabletDark,
  IconBoxMessageTabletLight,
} from "../constants/iconConstants";

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
              <a to="#">
                <img
                  src={isDarkMode ? IconBoxPhoneDark : IconBoxPhoneLight}
                  alt="Contact us - Phone"
                />
              </a>
            </div>
            <div id="icon-box-message">
              <a to="#">
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
            <a to="#">
              <img
                src={
                  isDarkMode ? IconBoxPhoneTabletDark : IconBoxPhoneTabletLight
                }
                alt="Contact us - Phone"
              />
            </a>
          </div>
          <div id="icon-box-message-tablet">
            <a to="#">
              <img
                src={
                  isDarkMode
                    ? IconBoxMessageTabletDark
                    : IconBoxMessageTabletLight
                }
                alt="Contact us - Message"
              />
            </a>
          </div>
        </div>

        <div className="contact-boxes-mobile">
          <a to="#" id="contact-us" className="btn-primary">
            <span>Contact us now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default FAQ;
