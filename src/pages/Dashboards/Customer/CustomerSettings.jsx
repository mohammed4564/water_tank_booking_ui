// src/dashboards/customer/CustomerSettings.jsx
import React, { useState } from "react";
import "./CustomerSettings.css";

function CustomerSettings() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Profile updated successfully (dummy)!");
    // Here you can integrate API later
  };

  return (
    <div className="customer-settings">
      <h1>Settings</h1>
      <p>Update your profile information and preferences.</p>

      <form className="settings-form" onSubmit={handleUpdate}>
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </label>

        <label>
          New Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter new password"
          />
        </label>

        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm new password"
          />
        </label>

        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
}

export default CustomerSettings;