import React, { useContext } from "react";
import { AuthContext } from "../components/providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location =useLocation();
  

  if (loading) {
    return (
      <div className="mx-auto">
        <span type="button" className="bg-indigo-500 ..." disabled>
        <svg className="animate-spin h-10 w-10 mr-3 ..." viewBox="0 0 24 24"></svg>
        Processing...
      </span>
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{from: location}} replace></Navigate>;
};

export default PrivetRoutes;
