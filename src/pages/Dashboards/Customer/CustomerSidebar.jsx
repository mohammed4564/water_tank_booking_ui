import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./CustomerDashboard.css";

function CustomerSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-header">
        <h2 className="logo">{isOpen ? "Customer" : "C"}</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? "⬅" : "➡"}
        </button>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/customer/home" className="sidebar-link">
          🏠 Home
        </NavLink>
        <NavLink to="/customer/booking" className="sidebar-link">
          💧 Book Water Tank
        </NavLink>
        <NavLink to="/customer/profile" className="sidebar-link">
          👤 Profile
        </NavLink>
        <NavLink to="/customer/orders" className="sidebar-link">
          📝 Orders
        </NavLink>
        <NavLink to="/customer/settings" className="sidebar-link">
          ⚙ Settings
        </NavLink>

        <NavLink to="/customer/become-driver" className="sidebar-link">
          🚚 Become Driver
        </NavLink>
      </nav>
    </div>
  );
}

export default CustomerSidebar;