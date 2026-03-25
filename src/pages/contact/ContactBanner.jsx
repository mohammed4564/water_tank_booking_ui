import React from "react";
import "./ContactBanner.css";

function ContactBanner() {
  return (
    <section className="contact-banner d-flex align-items-center justify-content-center">
      <div className="banner-content text-center">
        <h1>Get in Touch</h1>
        <p>
          Have questions or need assistance? Our team is here to help you. 
          Reach out today and we’ll respond as soon as possible.
        </p>
        <a href="/contact" className="btn btn-primary mt-3">
          Contact Us
        </a>
      </div>
    </section>
  );
}

export default ContactBanner;