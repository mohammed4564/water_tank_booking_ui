import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DriverSidebar from "./DriverSidebar";

import DriverHome from "./DriverHome";
import DriverOrders from "./DriverOrders";
import DriverHistory from "./DriverHistory";
import DriverProfile from "./DriverProfile";

import "./DriverDashboard.css";

function DriverDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/" />;

  return (
    <div className="dashboard-container">
      <DriverSidebar />

      <div className="dashboard-content">
        <Routes>
          <Route path="home" element={<DriverHome />} />
          <Route path="orders" element={<DriverOrders />} />
          <Route path="history" element={<DriverHistory />} />
          <Route path="profile" element={<DriverProfile />} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </div>
    </div>
  );
}

export default DriverDashboard;