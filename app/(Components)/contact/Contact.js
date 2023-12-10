// components/ContactLayout.js
import React from 'react';

const ContactLayout = () => {
  return (
    <div className="contact-layout">
      <h1 className="contact-heading">Contact</h1>
      <div className="contact-container">
        <div className="form-container">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="E-mail" />
          <input type="tel" placeholder="Phone Number" />
          <textarea placeholder="Message"></textarea>
          <button className="send-button">Send Message</button>
        </div>
        <div className="query-container">
          <h2>Have Any Queries?</h2>
          <p>
            Wish to get a free consultation or a quick checkup to identify the
            kind of treatment you need? Just give us a call or submit the form
            here.
          </p>
          <div className="contact-info">
            <div className="info-item">
              <span>📞</span>
              <p>+123 456 7890</p>
            </div>
            <div className="info-item">
              <span>✉️</span>
              <p>mail@example.com</p>
            </div>
            <div className="info-item">
              <span>📍</span>
              <p>123 Fifth Ave, NY 12004, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLayout;
