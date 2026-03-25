// src/dashboards/customer/CustomerProfile.jsx
import React from "react";
import "./CustomerProfile.css";

function CustomerProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="customer-profile">
      <h1>My Profile</h1>

      <div className="profile-card">
        <div className="profile-avatar">
          <span>{user.name.charAt(0)}</span>
        </div>

        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone || "Not provided"}</p>
          <p><strong>Address:</strong> {user.address || "Not provided"}</p>
        </div>
      </div>

      <button
        className="edit-btn"
        onClick={() => alert("Edit profile feature coming soon!")}
      >
        ✏ Edit Profile
      </button>
    </div>
  );
}

export default CustomerProfile;