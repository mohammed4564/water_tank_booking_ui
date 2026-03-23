import React from "react";

function DriverDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to Driver Dashboard</h1>
      {user && <p>Hello, <b>{user.name}</b>!</p>}

      <div style={{ marginTop: "30px" }}>
        <p>Check your assigned deliveries, routes, and schedules here.</p>
      </div>

    
    </div>
  );
}

export default DriverDashboard;