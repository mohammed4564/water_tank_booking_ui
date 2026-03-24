import React from "react";

function AdminReports() {
  return (
    <div>
      <h1>Admin Reports</h1>
      <p>
        Here you can view various reports related to users, orders, and system activity.
      </p>

      {/* Example placeholder for report content */}
      <div style={{ marginTop: "20px", padding: "10px", background: "#f9f9f9", borderRadius: "8px" }}>
        <p>📊 Total Users: 120</p>
        <p>💧 Orders Completed: 85</p>
        <p>📅 Reports Updated: Today</p>
      </div>
    </div>
  );
}

export default AdminReports;