import React from "react";
import "./ContactUs.css"; 

function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!"); // Replace with actual API call
  };

  return (
    <section className="section contact py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-primary">Contact Us</h2>

        <div className="contact-container d-flex flex-wrap justify-content-between gap-4">

          {/* Left Info */}
          <div className="contact-info flex-fill">
            <h3>Get in Touch</h3>
            <p>We are here to help you with water tanker booking anytime.</p>

            <p>📍 Bangalore, India</p>
            <p>📞 +91 9876543210</p>
            <p>📧 support@watertank.com</p>
          </div>

          {/* Right Form */}
          <form className="contact-form flex-fill" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="Subject" required />

            <textarea placeholder="Your Message..." rows="4" required></textarea>

            <button type="submit" className="btn btn-primary mt-2">
              Send Message
            </button>
          </form>

        </div>
      </div>
    </section>
  );
}

export default ContactUs;