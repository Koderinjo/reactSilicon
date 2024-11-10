import React from 'react';
import ConsultationForm from './ConsultationForm';
import { FaEnvelope, FaUsers } from 'react-icons/fa';

const ContactInfo = () => (
  <div className="contact-info">
    <div className="contactheading">
      <h1>Contact Us</h1>
    </div>
    <div className="contact-card email-us">
      <div className="icon-container">
        <FaEnvelope className="contact-icon" />
      </div>
      <div className="email-text">
      <h3>Email us</h3>
      <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
      <a href="#">Leave a message →</a>
      </div>
    </div>
    <div className="contact-card careers">
      <div className="icon-container">
        <FaUsers className="contact-icon" />
      </div>
      <div className="careers-text">
      <h3>Careers</h3>
      <p>Join our team! Check out our open positions.</p>
      <a href="#">Send an application →</a>
      </div>
    </div>
    <ConsultationForm />
  </div>
);

export default ContactInfo;
