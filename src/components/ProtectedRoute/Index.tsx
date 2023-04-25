import { useContext } from "react";
import { Route, Navigate, RouteProps, Routes } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const ProtectedRoute = (props: RouteProps) => {
  const context = useContext(AuthContext);

  if (!context?.user?.token) {
    return <Navigate to="/login" />;
  }

  return <>{props.element}</>;
};

export default ProtectedRoute;
