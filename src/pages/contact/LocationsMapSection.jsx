import React from "react";
function LocationMapSection() {
  return (
    <section className="location-map-section">
      <div className="container text-center mb-4">
        <h2>Our Server Location</h2>
        <p>We operate our servers from Bangalore, India to provide fast and reliable service.</p>
      </div>
      <div className="map-wrapper">
        <iframe
          title="Bangalore Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31178.018026840983!2d77.56780291538892!3d12.971598790855372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670b3c1986b%3A0x7db5e3ee04d4f9b4!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1698184086506!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default LocationMapSection;