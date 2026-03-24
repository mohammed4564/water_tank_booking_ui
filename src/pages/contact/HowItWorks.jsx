// src/components/HowItWorks.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './HowItWorks.css';

function HowItWorks() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="how-it-works py-5">
      <div className="container">
        <h2 className="text-center mb-5 text-primary" data-aos="fade-up">
          How It Works
        </h2>

        <div className="row justify-content-center position-relative step-row">
          {/* Step 1 */}
          <div className="col-md-3 step-item" data-aos="fade-up" data-aos-delay="100">
            <div className="step-card text-center p-4">
              <div className="step-number">1</div>
              <div className="step-icon">💻</div>
              <h5>Book Online</h5>
              <p>Choose the water type and schedule your delivery online.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="col-md-3 step-item" data-aos="fade-up" data-aos-delay="300">
            <div className="step-card text-center p-4">
              <div className="step-number">2</div>
              <div className="step-icon">🚚</div>
              <h5>Delivery</h5>
              <p>Our tanker reaches your location quickly and safely.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="col-md-3 step-item" data-aos="fade-up" data-aos-delay="500">
            <div className="step-card text-center p-4">
              <div className="step-number">3</div>
              <div className="step-icon">✅</div>
              <h5>Enjoy Water</h5>
              <p>Receive clean and safe drinking water at your doorstep.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;