import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import React from "react";
interface ProtectedRouteProps {
  children: React.ReactNode;
}


export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

  return isAuthenticated ? children : <Navigate to="/" />;
}
