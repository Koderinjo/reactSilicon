import React, { useState, useEffect } from 'react';


const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div id="darkmode-toggle-switch" className="btn-toggle-switch">
      <span className="label">Dark mode</span>
      <label htmlFor="darkmode-switch" className="toggle-switch">
        <input
          id="darkmode-switch"
          type="checkbox"
          checked={darkMode}
          onChange={handleToggle}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
};

export default DarkModeToggle;
