import React from 'react';
import ConsultationForm from './ConsultationForm';

const ContactInfo = () => (
  <div className="contact-info">
    <div className="contact-card email-us">
      <h3>Email us</h3>
      <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
      <a href="#">Leave a message →</a>
    </div>
    <div className="contact-card careers">
      <h3>Careers</h3>
      <p>Join our team! Check out our open positions.</p>
      <a href="#">Send an application →</a>
    </div>
    <ConsultationForm />
  </div>
);

export default ContactInfo;
