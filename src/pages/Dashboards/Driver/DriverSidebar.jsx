import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./DriverDashboard.css";

function DriverSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2>{isOpen ? "Driver" : "D"}</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "⬅" : "➡"}
        </button>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/driver/home" className="sidebar-link">🏠 Home</NavLink>
        <NavLink to="/driver/orders" className="sidebar-link">📦 My Orders</NavLink>
        <NavLink to="/driver/history" className="sidebar-link">📜 History</NavLink>
        <NavLink to="/driver/profile" className="sidebar-link">👤 Profile</NavLink>
      </nav>
    </div>
  );
}

export default DriverSidebar;