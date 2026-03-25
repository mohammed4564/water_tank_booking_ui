import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./ContactInfoSection.css";

function ContactInfoSection() {
  const contactCards = [
    {
      id: 1,
      icon: <FaPhoneAlt />,
      title: "Call Us",
      infoLines: ["+91 80 4567 8900", "+91 98765 43210"],
      ctaText: "Call Now →",
      link: "tel:+918045678900",
    },
    {
      id: 2,
      icon: <FaEnvelope />,
      title: "Email Us",
      infoLines: ["info@nammatanker.com", "support@nammatanker.com"],
      ctaText: "Send Email →",
      link: "mailto:info@nammatanker.com",
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt />,
      title: "Visit Us",
      infoLines: ["123 Water Street, Koramangala", "Bangalore, Karnataka 560034"],
      ctaText: "Get Directions →",
      link: "https://www.google.com/maps/place/Koramangala,+Bangalore",
    },
  ];

  const socialLinks = [
    { id: 1, icon: <FaFacebookF />, link: "https://facebook.com" },
    { id: 2, icon: <FaTwitter />, link: "https://twitter.com" },
    { id: 3, icon: <FaInstagram />, link: "https://instagram.com" },
    { id: 4, icon: <FaLinkedinIn />, link: "https://linkedin.com" },
  ];

  return (
    <section id="contact-info-section" className="contact-info-section py-5">
      <div className="container">

        <div className="row g-4 text-center">
          {contactCards.map((card) => (
            <div key={card.id} className="col-lg-4 col-md-6">
              <div className="contact-card p-4 rounded shadow h-100 d-flex flex-column justify-content-between">
                <div>
                  <div className="icon mb-3">{card.icon}</div>
                  <h4>{card.title}</h4>
                  {card.infoLines.map((line, index) => (
                    <p key={index} className="info-line">{line}</p>
                  ))}
                </div>
                <a href={card.link} className="cta-btn mt-3">{card.ctaText}</a>
              </div>
            </div>
          ))}
        </div>

        {/* Social Media */}
        <div className="social-media mt-5 text-center">
          <h5>Follow Us</h5>
          <div className="social-icons mt-3">
            {socialLinks.map((social) => (
              <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer">
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfoSection;