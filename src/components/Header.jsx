import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Header.css";

const MySwal = withReactContent(Swal);

function Header({ setShowLogin, setShowRegister }) {
  const navigate = useNavigate();
  const [roles, setRoles] = useState([]);
  const [scrolled, setScrolled] = useState(false);

  // helper to load roles from localStorage
  const loadRoles = () => {
    const storedRoles = JSON.parse(localStorage.getItem("roles") || "[]");
    setRoles(storedRoles);
  };

  useEffect(() => {
    loadRoles(); // load on mount

    // listen to localStorage changes (reactive login/logout)
    const handleStorageChange = () => loadRoles();
    window.addEventListener("storage", handleStorageChange);

    // navbar scroll effect
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isLoggedIn = roles.length > 0;
  const userRole = roles[0] || "customer"; // fallback

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
        setRoles([]);
        navigate("/");
      }
    });
  };

  const handleRoleRedirect = () => {
    switch (userRole) {
      case "admin":
        navigate("/admin");
        break;
      case "driver":
        navigate("/driver");
        break;
      default:
        navigate("/customer");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top p-3 custom-navbar ${
        scrolled ? "navbar-small" : "navbar-large"
      }`}
    >
      <div className="container-fluid">
        <span className="navbar-brand fw-bold" onClick={() => navigate("/")}>
          🚰 Water Tank
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {!isLoggedIn && (
            <ul className="navbar-nav mx-auto align-items-center gap-4">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" end>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
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

          <div className="d-flex align-items-center gap-2 ms-auto">
            {!isLoggedIn ? (
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
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  alt="profile"
                  className="avatar-img"
                  onClick={handleRoleRedirect}
                  style={{ cursor: "pointer" }}
                />
                <span className="fw-bold text-capitalize">{userRole}</span>
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