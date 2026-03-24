// src/components/LocationSection.jsx
import React from "react";
import "./LocationSection.css";

function LocationSection() {
  return (
    <section className="location-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Text */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <h2>Our Server Location</h2>
            <p>
              We proudly operate our servers from <strong>Bangalore, India</strong>, 
              ensuring fast and reliable services for all our clients across the region.
            </p>
            <p>
              Hosting locally allows us to provide minimal latency, better security, 
              and dedicated support for all our services.
            </p>
          </div>

          {/* Map / Image */}
          <div className="col-lg-6 col-md-12">
            <div className="map-wrapper">
              <iframe
                title="Bangalore Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.018026840983!2d77.56780291538892!3d12.971598790855372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670b3c1986b%3A0x7db5e3ee04d4f9b4!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1698184086506!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationSection;