import { useContext } from "react";
import DarkModeContext from "../DarkModeContext";
import AppstoreDark from "../assets/images/appstore-dark.svg";
import AppstoreLight from "../assets/images/appstore.svg";
import PlaystoreDark from "../assets/images/playstore-dark.svg";
import PlaystoreLight from "../assets/images/playstore.svg";
import IphoneBudget from "../assets/images/iphone-budg.svg";
import IphoneTransactions from "../assets/images/iphone-trans.svg";

const HeroSection = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <section id="hero">
      <div className="container">
        <div className="headline">
          <h1>
            Manage All Your <br /> Money in One App
          </h1>
        </div>
        <div className="content">
          <p>
            We offer you a new generation of the mobile banking. <br /> Save,
            spend & manage money in your pocket.
          </p>
          <div className="buttons">
            <a className="btn-download-app" id="appstore" href="#">
              <img
                src={isDarkMode ? AppstoreDark : AppstoreLight}
                alt="Appstore"
              />
            </a>
            <a className="btn-download-app" id="playstore" href="#">
              <img
                src={isDarkMode ? PlaystoreDark : PlaystoreLight}
                alt="Playstore"
              />
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
          <img className="img-back" src={IphoneBudget} alt="iPhone Budget" />
          <img
            className="img-front"
            src={IphoneTransactions}
            alt="iPhone Transactions"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
