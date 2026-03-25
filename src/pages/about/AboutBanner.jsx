// src/components/AboutBanner.jsx
import React from "react";
import "./AboutBanner.css";

function AboutBanner() {
  return (
    <section className="about-banner d-flex align-items-center justify-content-center">
      <div className="banner-content text-center">
        <h1>About Us</h1>
        <p>
          Learn more about our mission, vision, and the values that drive us.
        </p>
      </div>
    </section>
  );
}

export default AboutBanner;