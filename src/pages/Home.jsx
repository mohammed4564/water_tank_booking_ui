// src/pages/Home.jsx
import { useState } from "react";
import "./Home.css";
import LoginModal from "./Login";
import RegisterModal from "./Register";


function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="home">

  {/* HERO SECTION */}
<section className="hero">
  <div className="hero-overlay">
    <div className="hero-content">
      <h1>🚰 Water Tank Booking Service</h1>
      <p>
        We supply clean and safe <b>drinking water</b> with fast tanker delivery
        at your doorstep.
      </p>

      <div className="actions">
        <button className="primary-btn" onClick={() => setShowLogin(true)}>Login</button>
        <button className="outline-btn" onClick={() => setShowRegister(true)}>Register</button>
      </div>
    </div>
  </div>
</section>

      {/* SERVICES SECTION */}
  <section className="section services">
  <h2>Our Services</h2>
  <div className="grid">

    {/* Drinking Water */}
    <div className="card">
      <h3>💧 Drinking Water Supply</h3>
      <p>Pure and hygienic drinking water for homes and offices.</p>
    </div>

    {/* Tanker Delivery */}
    <div className="card">
      <h3>🚚 Tanker Delivery</h3>
      <p>Quick and reliable delivery to your location.</p>
    </div>

    {/* Easy Booking */}
    <div className="card">
      <h3>📱 Easy Booking</h3>
      <p>Book water tankers online anytime with a few clicks.</p>
    </div>

    {/* Live Tracking */}
    <div className="card">
      <h3>📍 Live Tracking</h3>
      <p>Track your tanker in real-time from dispatch to delivery.</p>
    </div>

    {/* Drinking Water Orders */}
    <div className="card">
      <h3>📝 Drinking Water Orders</h3>
      <p>Schedule regular orders for homes, offices, and institutions.</p>
    </div>

    {/* Use and Throw */}
    <div className="card">
      <h3>♻ Use & Throw Water</h3>
      <p>Disposable water containers for events or emergency needs.</p>
    </div>

    {/* Daily Use Water */}
    <div className="card">
      <h3>🚰 Daily Use Water</h3>
      <p>Fresh water supply for daily household or office use.</p>
    </div>

    {/* Farmers & Agriculture */}
    <div className="card">
      <h3>🌾 Farmers & Agriculture</h3>
      <p>Water tankers for irrigation, livestock, and farm use.</p>
    </div>

  </div>
</section>

      {/* WHY CHOOSE US */}
      <section className="section why-choose light">
        <h2>Why Choose Us?</h2>
        <ul className="features">
          <li>✅ Clean & safe drinking water</li>
          <li>✅ Affordable pricing</li>
          <li>✅ Fast delivery</li>
          <li>✅ Trusted local service</li>
        </ul>
      </section>

      {/* MODALS */}
      {showLogin && <LoginModal setShowLogin={setShowLogin} />}
      {showRegister && <RegisterModal setShowRegister={setShowRegister} />}

    </div>
  );
}

export default Home;