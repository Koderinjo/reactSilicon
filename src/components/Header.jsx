import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DarkModeContext } from '../App';
import SililogoDark from '../assets/images/sililogo-dark.svg';
import SililogoLight from '../assets/images/sililogo.svg';
import MobileMenu from './MobileMenu';
import DarkModeToggle from './DarkModeToggle';

const Header = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <header className={`header ${isContactPage ? 'contact-header' : ''}`}>
      <div className="container">
        <Link id="sililogo" to="/">
          <img src={isDarkMode ? SililogoDark : SililogoLight} alt="Silicon Logo" />
        </Link>
        <nav id="main-menu" className="navbar">
          <Link className="nav-link" id="features" to="/">
            Features
          </Link>
          <Link className="nav-link" id="contact" to="/contact">
            Contact
          </Link>
        </nav>
        <DarkModeToggle />
        <Link id="signin" to="/signin" className="btn-primary">
          <i className="fa-light fa-user"></i>
          <span>Sign in / up</span>
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
