import React, { useState } from "react";
import './HeroBanner.css';

function HeroBanner({ setShowRegister }) {
  const [pickup, setPickup] = useState("");

  const handleCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          // Using Nominatim OpenStreetMap API to get location name
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          const data = await response.json();
          setPickup(data.display_name || `${latitude}, ${longitude}`);
        } catch (err) {
          alert("Could not fetch location name. Try again.");
        }
      }, (error) => {
        alert("Location permission denied or unavailable.");
      });
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content text-center animate-hero">
          <h1 className="hero-title">🚰 Water Tank Booking Service</h1>
          <p className="hero-desc">
            We supply clean and safe <b>drinking water</b> with fast tanker delivery
            at your doorstep.
          </p>

          {/* Pickup Location Field */}
          <div className="location-fields mt-4">
            <div className="input-icon-wrapper mb-2">
              <span className="input-icon">📍</span>
              <input
                type="text"
                placeholder="Enter Pickup Location"
                className="form-control"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
              />
            </div>

            {/* Current Location Button */}
            <button
              className="btn btn-primary btn-sm mb-3 current-location-btn"
              onClick={handleCurrentLocation}
            >
              Use Current Location
            </button>
          </div>

          {/* Main Book Button */}
          <div className="actions mt-2">
            <button
              className="btn btn-warning btn-lg animate-button"
              onClick={() => setShowRegister(true)}
              disabled={!pickup} // Only allow booking if pickup location is filled
            >
              Book Water Tank
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;