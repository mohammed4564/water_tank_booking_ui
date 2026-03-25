import React from "react";
import "./DriverHome.css";

function DriverHome() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="driver-home">
      {/* Welcome Section */}
      <div className="welcome-card">
        <h2>Welcome, {user?.name} 👋</h2>
        <p>Manage your deliveries and track your performance.</p>
      </div>

      {/* Stats Section */}
      <div className="stats-container">
        <div className="stat-card">
          <h3>12</h3>
          <p>Total Orders</p>
        </div>

        <div className="stat-card">
          <h3>8</h3>
          <p>Delivered</p>
        </div>

        <div className="stat-card">
          <h3>₹3500</h3>
          <p>Earnings</p>
        </div>
      </div>

      {/* Info Section */}
      <div className="info-card">
        <h3>🚛 Today's Task</h3>
        <p>You have 3 deliveries pending. Complete them on time!</p>
      </div>
    </div>
  );
}

export default DriverHome;