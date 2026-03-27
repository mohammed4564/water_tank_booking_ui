import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

import LoginModal from "./pages/Login";
import RegisterModal from "./pages/Register";

// Dashboards
import AdminDashboard from "./pages/Dashboards/Admin/AdminDashboard";
import CustomerDashboard from "./pages/Dashboards/Customer/CustomerDashboard";
import DriverDashboard from "./pages/Dashboards/Driver/DriverDashboard";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/home/Home";
import WaterSourceDashboard from "./pages/Dashboards/waterResources/WaterSourceDashboard";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <BrowserRouter>
      <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister} />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/customer/*"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <CustomerDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/driver/*"
            element={
              <ProtectedRoute allowedRoles={["driver"]}>
                <DriverDashboard />
              </ProtectedRoute>
            }
          />

           <Route
            path="/water-source-dashboard/*"
            element={
              <ProtectedRoute allowedRoles={["water_source_owner"]}>
                <WaterSourceDashboard/>
              </ProtectedRoute>
            }
          />

          
        </Routes>
      </div>

      <Footer />

      {/* Pass both state setters so modals can switch */}
      {showLogin && (
        <LoginModal setShowLogin={setShowLogin} setShowRegister={setShowRegister} />
      )}
      {showRegister && (
        <RegisterModal setShowRegister={setShowRegister} setShowLogin={setShowLogin} />
      )}
    </BrowserRouter>
  );
}

export default App;