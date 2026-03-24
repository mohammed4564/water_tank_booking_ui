import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import "./SendMessageSection.css";

function SendMessageSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="send-message-section py-5">
      <div className="container">
        <div className="combined-card d-flex flex-lg-row flex-column shadow rounded overflow-hidden">

          {/* Left Side: Form */}
          <div className="form-side p-5 flex-fill">
            <h2 className="mb-4">Send a Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                className="form-control mb-3"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              ></textarea>
              <button type="submit" className="btn btn-primary w-100">
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Get in Touch */}
          <div className="info-side p-5 flex-fill text-white">
            <h2 className="mb-3">Get in Touch</h2>
            <p>
              Have questions or need assistance? Reach out via the form and we’ll respond as soon as possible.
            </p>
            <ul className="list-unstyled mt-4">
              <li><FaPhoneAlt className="me-2" /> +91 80 4567 8900 / +91 98765 43210</li>
              <li><FaEnvelope className="me-2" /> info@nammatanker.com</li>
              <li><FaMapMarkerAlt className="me-2" /> 123 Water Street, Koramangala, Bangalore, Karnataka 560034</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SendMessageSection;