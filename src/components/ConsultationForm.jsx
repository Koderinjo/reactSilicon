// ConsultationForm.jsx
import React from 'react';

const ConsultationForm = () => (
  <section className="consultation-form-container">
    <form className="consultation-form">
    <div>
      <h2>Get Online Consultation</h2>
    </div>
    <label htmlFor="name">Full name</label>
    <input type="text" id="name"/>

    <label htmlFor="email">Email address</label>
    <input type="email" id="email"/>

    <label htmlFor="specialist">Specialist</label>
    <div class="select-wrapper">
      <select id="specialist" class="custom-select">
        <option value=""></option>
        <option value="doctor">Noob</option>
        <option value="nurse">Semi-Noob</option>
        <option value="therapist">H4xx0r</option>
      </select>
    </div>
    <button type="submit">Make an appointment</button>   
    </form>
  </section>
);

export default ConsultationForm;
