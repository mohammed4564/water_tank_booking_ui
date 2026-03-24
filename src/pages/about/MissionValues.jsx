// src/components/MissionValues.jsx
import React from "react";
import "./MissionValues.css";

function MissionValues() {
  return (
    <section className="mission-values py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Our Mission & Values</h2>
          <p>
            We are committed to excellence and guided by principles that define who we are.
          </p>
        </div>

        <div className="row g-4">
          {/* Mission */}
          <div className="col-lg-6 col-md-12">
            <div className="card h-100 shadow-sm p-4 text-center">
              <h3 className="card-title mb-3">Our Mission</h3>
              <p className="card-text">
                To provide innovative and reliable solutions that empower our clients 
                and enrich their experience. We strive to maintain integrity, quality, 
                and excellence in everything we do.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="col-lg-6 col-md-12">
            <div className="card h-100 shadow-sm p-4 text-center">
              <h3 className="card-title mb-3">Our Values</h3>
              <ul className="values-list list-unstyled mb-0">
                <li>💡 Innovation & Creativity</li>
                <li>🤝 Integrity & Trust</li>
                <li>🌱 Sustainability & Responsibility</li>
                <li>🏆 Excellence & Quality</li>
                <li>🌍 Collaboration & Community</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionValues;