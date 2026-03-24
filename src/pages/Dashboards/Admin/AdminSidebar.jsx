import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./AdminSidebar.css";

function AdminSidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Sidebar Header */}
      <div className="sidebar-header">
        <h2 className="logo">{isOpen ? "Admin" : "A"}</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          {isOpen ? "⬅" : "➡"}
        </button>
      </div>

      {/* Sidebar Links */}
      <nav className="sidebar-nav">
        <NavLink to="/admin/dashboard" className="sidebar-link">
          🏠 Dashboard
        </NavLink>
        <NavLink to="/admin/users" className="sidebar-link">
          👥 Manage Users
        </NavLink>
        <NavLink to="/admin/orders" className="sidebar-link">
          📝 Orders
        </NavLink>
        <NavLink to="/admin/reports" className="sidebar-link">
          📊 Reports
        </NavLink>
        <NavLink to="/admin/settings" className="sidebar-link">
          ⚙ Settings
        </NavLink>
      </nav>
    </div>
  );
}

export default AdminSidebar;