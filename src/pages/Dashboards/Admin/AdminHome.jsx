import React from "react";

function AdminHome() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1>Welcome to Admin Dashboard</h1>
      {user && <p>Hello, <b>{user.name}</b>!</p>}
      <p>
        This is your admin dashboard. You can manage users, orders, and more from here.
      </p>
    </div>
  );
}

export default AdminHome;