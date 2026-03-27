import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./WaterSourceDashboard.css"; // reuse similar CSS as driver

function WaterSourceSidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2>{isOpen ? "Water Owner" : "W"}</h2>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "⬅" : "➡"}
        </button>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/water-source/home" className="sidebar-link">🏠 Home</NavLink>
        <NavLink to="/water-source/sources" className="sidebar-link">💧 My Sources</NavLink>
        <NavLink to="/water-source/orders" className="sidebar-link">📦 Orders</NavLink>
        <NavLink to="/water-source/profile" className="sidebar-link">👤 Profile</NavLink>
      </nav>
    </div>
  );
}

export default WaterSourceSidebar;