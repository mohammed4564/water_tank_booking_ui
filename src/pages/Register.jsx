// src/components/RegisterModal.jsx
import { useState } from "react";
import "./Modal.css";

function RegisterModal({ setShowRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // send {name, phone, email, password}
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Registration failed!");
      } else {
        alert(data.message); // "User registered successfully"
        setShowRegister(false);
        setFormData({ name: "", phone: "", email: "", password: "" });
      }
    } catch (err) {
      setError("Network error. Try again.");
    }

    setLoading(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) setShowRegister(false);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <h2>Register</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
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

        <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        <button className="close-btn" onClick={() => setShowRegister(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default RegisterModal;