import React, { useContext } from 'react';
import { DarkModeContext } from '../App';

const HeroSection = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section id="hero">
      <div className="container">
        <div className="headline">
          <h1>Manage All Your <br /> Money in One App</h1>
        </div>
        <div className="content">
          <p>We offer you a new generation of the mobile banking. <br /> Save, spend & manage money in your pocket.</p>
          <div className="buttons">
            <a className="btn-download-app" id="appstore" href="#">
              <img src={isDarkMode ? 'images/appstore-dark.svg' : 'images/appstore.svg'} alt="Appstore" />
            </a>
            <a className="btn-download-app" id="playstore" href="#">
              <img src={isDarkMode ? 'images/playstore-dark.svg' : 'images/playstore.svg'} alt="Playstore" />
            </a>
          </div>
          <a href="#" className="discover-more">
            <span className="btn-circle">
              <i className="fa-solid fa-chevron-down"></i>
            </span>
            <span id="discover-more">Discover more</span>
          </a>
        </div>
        <div className="images">
          <img className="img-back" src="images/iphone-budg.svg" alt="iPhone Budget" />
          <img className="img-front" src="images/iPhone-trans.svg" alt="iPhone Transactions" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
