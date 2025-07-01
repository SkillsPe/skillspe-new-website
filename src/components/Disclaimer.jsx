import React from 'react';
import '../css/Disclaimer.css';
import SkillsPeLogo from '../assets/logo.svg';
import WarningIcon from '../assets/warning-icon.svg'; 

const Disclaimer = () => {
  return (
    <section className="disclaimer-container">
      <div className="disclaimer-logo">
        <img src={SkillsPeLogo} alt="SkillsPe Logo" />
      </div>

      <div className="disclaimer-content">
        <div className="disclaimer-title">
          <img src={WarningIcon} alt="Warning" className="disclaimer-icon" />

          <div className="disclaimer-text">
            <h2>Disclaimer</h2>
            <p>
              Several deceptive emails, websites, blogs etc. claiming to be from or associated with
              Us may be circulated or are circulating on the Internet (“Deceptive Communication”).
              Such Deceptive Communication may include our logo, photos, links, content or other
              information. Some Deceptive Communication may call the User requesting the User to
              provide Mobile Number, OTP etc. or any other information and inform the User that the
              User has won a prize/ gift or provide a method to commit an illegal/ unauthorized act
              or deed or request detailed Personal Information or a payment of any sort. The sources
              and contents of these Deceptive Communications and accompanying materials are in no
              way associated with Us.
            </p>
            <p>
              For your own protection, we strongly recommend to not respond to such Deceptive
              Communication. You agree that we shall not be liable for any direct or indirect,
              consequential or inconsequential loss, damage and/or harm that you may suffer by
              relying and/or acting upon such Deceptive Communications. Except, as provided for the
              purpose of verification, as set out under the Terms and Conditions, We and/or Our
              employees will not contact you to divulge your SPDI (Sensitive Personal Data and
              Information).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Disclaimer;