import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import WaterSourceSidebar from "./WaterSourceSidebar";

import WaterSourceHome from "./WaterSourceHome";
import WaterSourceOrders from "./WaterSourceOrders";
import WaterSourceSources from "./WaterSourceSources";
import WaterSourceProfile from "./WaterSourceProfile";

import "./WaterSourceDashboard.css";

function WaterSourceDashboard() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/" />;

  return (
    <div className="dashboard-container">
      <WaterSourceSidebar />

      <div className="dashboard-content">
        <Routes>
          <Route path="home" element={<WaterSourceHome />} />
          <Route path="sources" element={<WaterSourceSources />} />
          <Route path="orders" element={<WaterSourceOrders />} />
          <Route path="profile" element={<WaterSourceProfile />} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </div>
    </div>
  );
}

export default WaterSourceDashboard;