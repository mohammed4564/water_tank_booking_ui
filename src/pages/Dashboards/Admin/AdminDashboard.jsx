import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHome from "./AdminHome";
import AdminSettings from "./AdminSettings";
import AdminReports from "./AdminReports"; // ✅ import it
import AdminUsers from "./AdminUsers";
import AdminOrders from "./AdminOrders";
import AdminRequests from "./AdminRequests";

function AdminDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/" />;

  return (
    <div className="dashboard-container">
      <AdminSidebar />
      <div className="dashboard-content">
        <Routes>
          <Route path="dashboard" element={<AdminHome />} />
          <Route path="settings" element={<AdminSettings />} />
            <Route path="requests" element={<AdminRequests />} /> 

          <Route path="reports" element={<AdminReports />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="*" element={<Navigate to="" />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;