// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) return <Navigate to="/" />; // Not logged in
  if (!allowedRoles.includes(user.role)) return <Navigate to="/" />; // Role not allowed

  return children;
}

export default ProtectedRoute;