// ConsultationForm.jsx
import React from 'react';

const ConsultationForm = () => (
  <section className="consultation-form-container">
    <h2>Get Online Consultation</h2>
    <form className="consultation-form">
      <label htmlFor="name">Full name</label>
      <input type="text" id="name" placeholder="Enter your full name" />

      <label htmlFor="email">Email address</label>
      <input type="email" id="email" placeholder="Enter your email address" />

      <label htmlFor="specialist">Specialist</label>
      <select id="specialist">
        <option value="">Select a specialist</option>
        <option value="doctor">Doctor</option>
        <option value="nurse">Nurse</option>
        <option value="therapist">Therapist</option>
      </select>

      <button type="submit">Make an appointment</button>
    </form>
  </section>
);

export default ConsultationForm;
