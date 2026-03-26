// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const roles = JSON.parse(localStorage.getItem("roles") || "[]");

  // Not logged in
  if (!roles || roles.length === 0) return <Navigate to="/" />;

  // Check if at least one allowed role exists
  const hasAccess = roles.some((role) => allowedRoles.includes(role));
  if (!hasAccess) return <Navigate to="/" />;

  return children;
}

export default ProtectedRoute;