import ConsultationForm from "./ConsultationForm";
import { FaEnvelope, FaUsers } from "react-icons/fa";
import Breadcrumb from "./Breadcrumb";

const ContactInfo = () => (
  <div className="contact-info">
    <div className="left-column">
      <div className="contactheading">
        <Breadcrumb />
        <h1>Contact Us</h1>
      </div>
      <div className="contact-card email-us">
        <div className="icon-container">
          <FaEnvelope className="contact-icon" />
        </div>
        <div className="email-text">
          <h3>Email us</h3>
          <p>
            Please feel free to drop us a line. We will respond as soon as
            possible.
          </p>
          <a href="#">Leave a message →</a>
        </div>
      </div>
      <div className="contact-card careers">
        <div className="icon-container">
          <FaUsers className="contact-icon" />
        </div>
        <div className="careers-text">
          <h3>Careers</h3>
          <p>
            Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.
          </p>
          <a href="#">Send an application →</a>
        </div>
      </div>
    </div>
    <div className="right-column">
      <ConsultationForm />
    </div>
  </div>
);

export default ContactInfo;
