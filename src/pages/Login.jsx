import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock, AiOutlineEye, AiOutlineEyeInvisible, AiOutlineClose } from "react-icons/ai";
import "./Modal.css";

function LoginModal({ setShowLogin, setShowRegister }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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

      if (!response.ok) setError(data.error || "Login failed!");
      else {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("refresh_token", data.refresh_token);
        localStorage.setItem("user", JSON.stringify(data.user));

        const role = data.user.role;
        if (role === "admin") navigate("/admin");
        else if (role === "customer") navigate("/customer");
        else if (role === "driver") navigate("/driver");

        setShowLogin(false);
        setFormData({ email: "", password: "" });
      }
    } catch {
      setError("Network error. Try again.");
    }

    setLoading(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) setShowLogin(false);
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="custom-modal" onClick={(e) => e.stopPropagation()}>

        {/* Top-right close button */}
        <button className="modal-close-btn" onClick={() => setShowLogin(false)}>
          <AiOutlineClose />
        </button>

        <h2>Login</h2>
        {error && <p className="error">{error}</p>}

        {/* Email Input */}
        <div className="input-icon-wrapper">
          <AiOutlineMail className="input-icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Password Input */}
        <div className="input-icon-wrapper">
          <AiOutlineLock className="input-icon" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </div>

        <button className="submit-btn" onClick={handleSubmit} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="switch-link">
          Don't have an account?{" "}
          <span onClick={() => { setShowLogin(false); setShowRegister(true); }}>
            Register
          </span>
        </p>

      </div>
    </div>
  );
}

export default LoginModal;