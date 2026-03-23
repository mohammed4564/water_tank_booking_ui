import React from "react";

function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to Admin Dashboard</h1>
      {user && <p>Hello, <b>{user.name}</b>!</p>}

      <div style={{ marginTop: "30px" }}>
        <p>This is your admin dashboard. You can manage users, orders, and more from here.</p>
      </div>

     
    </div>
  );
}

export default AdminDashboard;