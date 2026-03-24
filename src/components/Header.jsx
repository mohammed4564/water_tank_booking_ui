// src/components/Header.jsx
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Header.css";

const MySwal = withReactContent(Swal);

function Header({ setShowLogin, setShowRegister }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    MySwal.fire({
      title: "Logout",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/");
      }
    });
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top p-3 custom-navbar ${
        scrolled ? "navbar-small" : "navbar-large"
      }`}
    >
      <div className="container-fluid">

        {/* LOGO */}
        <span className="navbar-brand fw-bold" onClick={() => navigate("/")}>
          🚰 Water Tank
        </span>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          
          {/* CENTER MENU - hide if logged in */}
          {!user && (
            <ul className="navbar-nav mx-auto align-items-center gap-4">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>Home</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>

              <li className="nav-item">
                <button
                  className="btn btn-success"
                  onClick={() => setShowRegister(true)}
                >
                  Book Now
                </button>
              </li>
            </ul>
          )}

          {/* RIGHT SIDE */}
          <div className="d-flex align-items-center gap-2 ms-auto">
            {!user ? (
              <>
                <button
                  className="btn btn-outline-primary me-2"
                  onClick={() => setShowLogin(true)}
                >
                  Sign In
                </button>

                <button
                  className="btn btn-primary"
                  onClick={() => setShowRegister(true)}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                <img
                  src={
                    user.profilePic ||
                    "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  }
                  alt="profile"
                  className="avatar-img"
                />

                <span>{user.name}</span>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}

export default Header;