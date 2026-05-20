import { Children } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, initializing } = useAuthStore();
  const location = useLocation();

  if (loading || initializing) {
    return <h2>loading....</h2>;
  }
  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location,
        }}
        replace
      />
    );
  }

  return children;
};
