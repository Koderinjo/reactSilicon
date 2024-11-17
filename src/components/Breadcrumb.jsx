import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="breadcrumb">
      <Link to="/">
        <FontAwesomeIcon icon={faHome} /> Home
      </Link>
      {pathnames.map((value, index) => {
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLast = index === pathnames.length - 1;

        return isLast ? (
          <span key={to} className="breadcrumb-active">
            <FontAwesomeIcon icon={faChevronRight} />{" "}
            {value.charAt(0).toUpperCase() + value.slice(1)}
          </span>
        ) : (
          <span key={to}>
            <FontAwesomeIcon icon={faChevronRight} />{" "}
            <Link to={to}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          </span>
        );
      })}
    </nav>
  );
};

Breadcrumb.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default Breadcrumb;
