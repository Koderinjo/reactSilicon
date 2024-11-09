import React from 'react';
import ContactInfo from './ContactInfo';
import ConsultationForm from './ConsultationForm';
import MapSection from './MapSection';
import MedicalCenters from './MedicalCenters';
import Footer from './Footer';

const ContactPage = () => (
  <div className="contact-page">
    <div className="content">
      <ContactInfo />
    </div>
    {/* <MapSection /> */}
    {/* <MedicalCenters /> */}
  </div>
);

export default ContactPage;
