// // // src/App.jsx
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import { useState } from "react";

// // import Home from "./pages/Home";
// // import Header from "./components/Header";
// // import Footer from "./components/Footer";
// // // import LoginModal from "./components/LoginModal";
// // import RegisterModal from "./pages/Register";
// // import LoginModal from "./pages/Login";
// // // import RegisterModal from "./components/RegisterModal";

// // function App() {
// //   // modal state
// //   const [showLogin, setShowLogin] = useState(false);
// //   const [showRegister, setShowRegister] = useState(false);

// //   return (
// //     <BrowserRouter>
// //       {/* HEADER */}
// //       <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister} />

// //       {/* MAIN CONTENT */}
// //       <div className="main-content">
// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //         </Routes>
// //       </div>

// //       {/* FOOTER */}
// //       <Footer />

// //       {/* MODALS */}
// //       {showLogin && <LoginModal setShowLogin={setShowLogin} />}
// //       {showRegister && <RegisterModal setShowRegister={setShowRegister} />}
// //     </BrowserRouter>
// //   );
// // }

// // export default App;


// // src/App.jsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";

// import Home from "./pages/Home";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import LoginModal from "./pages/Login";
// import RegisterModal from "./pages/Register";

// // Dashboards
// import AdminDashboard from "./pages/Dashboards/Admin/AdminDashboard";
// import CustomerDashboard from "./pages/Dashboards/Customer/CustomerDashboard";
// import DriverDashboard from "./pages/Dashboards/Driver/DriverDashboard";

// // Protected Route
// import ProtectedRoute from "./components/ProtectedRoute";

// function App() {
//   // modal state
//   const [showLogin, setShowLogin] = useState(false);
//   const [showRegister, setShowRegister] = useState(false);

//   return (
//     <BrowserRouter>
//       {/* HEADER */}
//       <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister} />

//       {/* MAIN CONTENT */}
//       <div className="main-content">
//         <Routes>
//           {/* Home */}
//           <Route path="/" element={<Home />} />

//           {/* Admin Dashboard */}
//           <Route
//             path="/admin"
//             element={
//               <ProtectedRoute allowedRoles={["admin"]}>
//                 <AdminDashboard />
//               </ProtectedRoute>
//             }
//           />

//           {/* Customer Dashboard */}
//           {/* <Route
//             path="/customer"
//             element={
//               <ProtectedRoute allowedRoles={["customer"]}>
//                 <CustomerDashboard />
//               </ProtectedRoute>
//             }
//           /> */}

//           <Route
//   path="/customer/*"
//   element={
//     <ProtectedRoute allowedRoles={["customer"]}>
//       <CustomerDashboard />
//     </ProtectedRoute>
//   }
// />

//           {/* Driver Dashboard */}
//           <Route
//             path="/driver"
//             element={
//               <ProtectedRoute allowedRoles={["driver"]}>
//                 <DriverDashboard />
//               </ProtectedRoute>
//             }
//           />
//         </Routes>
//       </div>

//       {/* FOOTER */}
//       <Footer />

//       {/* MODALS */}
//       {showLogin && <LoginModal setShowLogin={setShowLogin} />}
//       {showRegister && <RegisterModal setShowRegister={setShowRegister} />}
//     </BrowserRouter>
//   );
// }

// export default App;



// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
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

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <BrowserRouter>
      <Header setShowLogin={setShowLogin} setShowRegister={setShowRegister} />

      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Admin Dashboard */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={["admin"]}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* Customer Dashboard */}
          <Route
            path="/customer/*"
            element={
              <ProtectedRoute allowedRoles={["customer"]}>
                <CustomerDashboard />
              </ProtectedRoute>
            }
          />

          {/* Driver Dashboard */}
          <Route
            path="/driver/*"
            element={
              <ProtectedRoute allowedRoles={["driver"]}>
                <DriverDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      <Footer />

      {showLogin && <LoginModal setShowLogin={setShowLogin} />}
      {showRegister && <RegisterModal setShowRegister={setShowRegister} />}
    </BrowserRouter>
  );
}

export default App;