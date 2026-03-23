// src/components/Header.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Header.css";

const MySwal = withReactContent(Swal);

function Header({ setShowLogin, setShowRegister }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user")); 
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    MySwal.fire({
      title: 'Logout',
      text: 'Are you sure you want to logout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, logout',
      cancelButtonText: 'Cancel',
      customClass: {
        confirmButton: 'btn-confirm', 
        cancelButton: 'btn-cancel'
      },
      buttonsStyling: false
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/");
      }
    });
  };

  return (
    <div className="header">
      <h2 className="logo" onClick={() => navigate("/")}>
        🚰 Water Tank
      </h2>

      <div className={`nav ${menuOpen ? "active" : ""}`}>
        {!user ? (
          <>
            <button onClick={() => setShowLogin(true)}>Login</button>
            <button onClick={() => setShowRegister(true)}>Register</button>
          </>
        ) : (
          <>
            <span className="user-name">Hello, {user.name}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>

      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Header;