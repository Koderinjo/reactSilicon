import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className="breadcrumb">
      <Link to="/">Homepage</Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
        const isLast = index === pathnames.length - 1;
        
        return isLast ? (
          <span key={to} className="breadcrumb-active">{value.charAt(0).toUpperCase() + value.slice(1)}</span>
        ) : (
          <span key={to}>
            <Link to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link> →
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
