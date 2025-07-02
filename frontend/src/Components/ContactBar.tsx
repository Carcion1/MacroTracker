import React from "react";
import "../Styles/ContactBar.css";

const ContactBar = () => {
  return (
    <div className="contact-container">
      <div className="contact-bar" id="contact">
        <div className="main-flex">
          <div className="logo-position">
            <span>Logo</span>
          </div>
          <div className="first-row">
            <h4>About</h4>
            <h4>Services</h4>
            <h4>Contact</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
