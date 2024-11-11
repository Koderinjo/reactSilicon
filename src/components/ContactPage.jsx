import React from 'react';
import ContactInfo from './ContactInfo';
import ConsultationForm from './ConsultationForm';
import MapSection from './MapSection';
import MedicalCenters from './MedicalCenters';
import Footer from './Footer';
import Breadcrumb from'./Breadcrumb';

const ContactPage = () => (
  <div className="contact-page">
    <div className="container">
      <ContactInfo />
    </div >
    <MapSection />
    <MedicalCenters />
  </div>
);

export default ContactPage;
