import { useState } from "react";
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineClose } from "react-icons/ai";
import "./Modal.css";

function RegisterModal({ setShowRegister, setShowLogin }) {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/api/users/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (!response.ok) setError(data.error || "Registration failed!");
      else {
        alert("Registration successful!");
        setShowRegister(false);
        setFormData({ name: "", phone: "", email: "", password: "" });
      }
    } catch {
      setError("Network error. Try again.");
    }

    setLoading(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) setShowRegister(false);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
        
        {/* Close button */}
        <button className="modal-close-btn" onClick={() => setShowRegister(false)}>
          <AiOutlineClose />
        </button>

        <h2>Register</h2>

        {error && <p className="error">{error}</p>}

        <div className="input-icon-wrapper">
          <AiOutlineUser className="input-icon" />
          <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="input-icon-wrapper">
          <AiOutlinePhone className="input-icon" />
          <input type="number" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="input-icon-wrapper">
          <AiOutlineMail className="input-icon" />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="input-icon-wrapper">
          <AiOutlineLock className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <span className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="switch-link">
          Already have an account?{" "}
          <span onClick={() => { setShowRegister(false); setShowLogin(true); }}>
            Login
          </span>
        </p>

      </div>
    </div>
  );
}

export default RegisterModal;