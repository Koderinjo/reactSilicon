import React, { useContext } from 'react';
import { DarkModeContext } from '../App';

const DarkModeToggle = () => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkModeContext);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
      <span className="label">Dark mode</span>
      <label htmlFor="darkmode-switch" className="toggle-switch">
        <input
          id="darkmode-switch"
          type="checkbox"
          checked={isDarkMode}
          onChange={handleToggle}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
