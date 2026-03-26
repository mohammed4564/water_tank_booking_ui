// src/dashboards/customer/CustomerDashboard.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import CustomerSidebar from "./CustomerSidebar";
import CustomerHome from "./CustomerHome";
import CustomerProfile from "./CustomerProfile";
import CustomerSettings from "./CustomerSettings";

import "./CustomerDashboard.css";
import CustomerOrders from "./customerOrders";
import CustomerBooking from "./CustomerBooking";
import BecomeDriver from "./BecomeDriver";

function CustomerDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/" />; // redirect if not logged in

  return (
    <div className="dashboard-container">
      <CustomerSidebar />

      <div className="dashboard-content">
        <Routes>
          <Route path="home" element={<CustomerHome />} />
            <Route path="booking" element={<CustomerBooking />} />

          <Route path="profile" element={<CustomerProfile />} />
          <Route path="orders" element={<CustomerOrders />} />
          <Route path="settings" element={<CustomerSettings />} />
                    <Route path="become-driver" element={<BecomeDriver />} />

          <Route path="*" element={<Navigate to="home" />} /> {/* default page */}
        </Routes>
      </div>
    </div>
  );
}

export default CustomerDashboard;