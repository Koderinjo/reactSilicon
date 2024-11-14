import React from 'react';
import ContactInfo from './ContactInfo';
import MapSection from './MapSection';
import MedicalCenters from './MedicalCenters';
import Footer from './Footer';

const ContactPage = () => (
  <div className="contact-us-page">
    <div className="container">
      <ContactInfo />
    </div>
    <div className="map-page">
      <div className="container">
        <MapSection />
        <MedicalCenters />
      </div>
    </div>
  </div>
);

export default ContactPage;
