import React, { useState, useEffect } from "react";
// import "./AdminSettings.css";

function AdminSettings() {
  const user = JSON.parse(localStorage.getItem("user"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can call an API to update admin settings
    console.log("Updated settings:", { name, email, password });
    alert("Settings updated successfully!");
    setPassword(""); // Clear password field after submit
  };

  return (
    <div className="settings-container">
      <h2>Admin Settings</h2>
      <form className="settings-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          New Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Leave blank to keep current"
          />
        </label>

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}

export default AdminSettings;