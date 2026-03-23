

// src/components/LoginModal.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Modal.css";

function LoginModal({ setShowLogin }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // for redirecting

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle login submit
  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Login failed!");
      } else {
        // Save tokens in localStorage
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Redirect based on role
        const role = data.user.role;
        if (role === "admin") navigate("/admin");
        else if (role === "customer") navigate("/customer");
        else if (role === "driver") navigate("/driver");
        else navigate("/"); // fallback

        setShowLogin(false);
        setFormData({ email: "", password: "" });
      }
    } catch (err) {
      setError("Network error. Try again.");
    }

    setLoading(false);
  };

  // Close modal if clicked outside
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) setShowLogin(false);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h2>Login</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        <button
          className="submit-btn"
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
        <button className="close-btn" onClick={() => setShowLogin(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default LoginModal;