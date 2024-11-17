import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="menu-button" ref={menuRef}>
      <button
        className="btn-menu"
        aria-label="Toggle mobile menu"
        onClick={toggleMenu}
      >
        <i className="fa-sharp fa-regular fa-bars"></i>
      </button>
      <ul className={`menu-dropdown ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
