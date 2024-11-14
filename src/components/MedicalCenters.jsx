import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faTwitter, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faMapMarkerAlt, faPhone, faClock} from '@fortawesome/free-solid-svg-icons';

const MedicalCenters = () => (
  <section className="medical-centers">
    <div className="center">
      <h3>Medical Center 1</h3>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        4517 Washington Ave. Manchester, Kentucky 39495
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} />
        (406) 555-0120
      </p>
      <div className="opening-hours">
        <FontAwesomeIcon icon={faClock} />
        <div>
          <strong>Mon - Fri:</strong> 9:00 am - 10:00 pm <br /> <strong>Sat - Sun:</strong> 9:00 am - 8:00 pm
        </div>
      </div>
    </div>
    <div className="center">
      <h3>Medical Center 2</h3>
      <p>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        2464 Royal Ln. Mesa, New Jersey 45463
      </p>
      <p>
        <FontAwesomeIcon icon={faPhone} />
        (406) 544-0123
      </p>
      <div className="opening-hours">
        <FontAwesomeIcon icon={faClock} />
        <div>
          <strong>Mon - Fri:</strong> 9:00 am - 10:00 pm <br/> <strong>Sat - Sun:</strong> 9:00 am - 8:00 pm
        </div>
      </div>
      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
    </div>
  </section>
);

export default MedicalCenters;
