import { useNavigate } from "react-router-dom";
import "../pages/Home.css";
function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">

      {/* HERO SECTION */}
      <div className="hero">
        <h1>🚰 Water Tank Booking Service</h1>
        <p>
          We supply clean and safe <b>drinking water</b> with fast tanker delivery
          at your doorstep.
        </p>

        <div className="actions">
          <button onClick={() => navigate("/login")}>Login</button>
          <button onClick={() => navigate("/register")} className="outline">
            Register
          </button>
        </div>
      </div>

      {/* SERVICES */}
      <div className="section">
        <h2>Our Services</h2>

        <div className="grid">
          <div className="card">
            <h3>💧 Drinking Water Supply</h3>
            <p>We provide pure and hygienic drinking water for homes and offices.</p>
          </div>

          <div className="card">
            <h3>🚚 Tanker Delivery</h3>
            <p>Quick and reliable tanker delivery directly to your location.</p>
          </div>

          <div className="card">
            <h3>📱 Easy Booking</h3>
            <p>Book water tankers online anytime with just a few clicks.</p>
          </div>

          <div className="card">
            <h3>📍 Live Tracking</h3>
            <p>Track your tanker in real-time from dispatch to delivery.</p>
          </div>
        </div>
      </div>

      {/* WHY CHOOSE US */}
      <div className="section light">
        <h2>Why Choose Us?</h2>

        <ul className="features">
          <li>✔ Clean & safe drinking water</li>
          <li>✔ Affordable pricing</li>
          <li>✔ Fast delivery</li>
          <li>✔ Trusted local service</li>
        </ul>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <p>© 2026 Water Tank Booking | Reliable Water Supply</p>
      </div>

    </div>
  );
}

export default Home;