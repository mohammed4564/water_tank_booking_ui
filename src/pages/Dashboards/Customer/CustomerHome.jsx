// src/dashboards/customer/CustomerHome.jsx
import React from "react";
import "./CustomerHome.css";

function CustomerHome() {
  const user = JSON.parse(localStorage.getItem("user"));

  // Dummy stats for now (can fetch real data later)
  const stats = [
    { title: "Total Orders", value: 12 },
    { title: "Pending Orders", value: 3 },
    { title: "Completed Orders", value: 9 },
  ];

  return (
    <div className="customer-home">
      {/* Welcome Section */}
      <div className="welcome-section">
        <h1>Welcome back, {user.name}!</h1>
        <p>Manage your water tanker orders and bookings from your dashboard.</p>
      </div>

      {/* Quick Stats */}
      <div className="stats-cards">
        {stats.map((stat, idx) => (
          <div className="stat-card" key={idx}>
            <h3>{stat.value}</h3>
            <p>{stat.title}</p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="home-actions">
        <button className="action-btn" onClick={() => alert("Place a new order")}>
          🛒 Place New Order
        </button>
        <button className="action-btn" onClick={() => alert("View your bookings")}>
          📄 View Bookings
        </button>
      </div>
    </div>
  );
}

export default CustomerHome;