import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Logo / About */}
        <div className="footer-section">
          <h2>🚰 Water Tank</h2>
          <p>
            Fast, reliable water tanker booking service.
            We deliver clean water to your doorstep anytime.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Book Tank</li>
            <li>Orders</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>Water Delivery</li>
            <li>Bulk Supply</li>
            <li>Emergency Service</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>📍 Bangalore, India</p>
          <p>📞 +91 9876543210</p>
          <p>📧 support@watertank.com</p>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 Water Tank Booking | All Rights Reserved</p>

        <div className="socials">
          <span>🌐</span>
          <span>📘</span>
          <span>🐦</span>
          <span>📸</span>
        </div>
      </div>

    </footer>
  );
}

export default Footer;