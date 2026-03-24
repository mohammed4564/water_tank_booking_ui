import React from "react";

function DriverProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1>Driver Profile</h1>
      <p>Name: {user?.name}</p>
      <p>Email: {user?.email}</p>
    </div>
  );
}

export default DriverProfile;