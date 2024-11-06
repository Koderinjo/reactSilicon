import React, { useContext } from 'react';
import { DarkModeContext } from '../App';
import SililogoDark from '../assets/images/sililogo-dark.svg'
import SililogoLight from '../assets/images/sililogo.svg'


const Header = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  return (
    <header>
      <div className="container">
        <a id="sililogo" href="index.html">
          <img src={isDarkMode ? SililogoDark : SililogoLight} alt="Silicon Logo" />
        </a>
        <nav id="main-menu" className="navbar">
          <a className="nav-link" id="features" href="#">Features</a>
        </nav>
        <div id="darkmode-toggle-switch" className="btn-toggle-switch">
          <span className="label">Dark mode</span>
          <label htmlFor="darkmode-switch" className="toggle-switch">
            <input id="darkmode-switch" type="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
            <span className="slider round"></span>
          </label>
        </div>
        <a id="signin" href="#" className="btn-primary">
          <i className="fa-light fa-user"></i>
          <span>Sign in / up</span>
        </a>
        <button className="btn-menu" aria-label="Menu Button">
          <i className="fa-sharp fa-regular fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
