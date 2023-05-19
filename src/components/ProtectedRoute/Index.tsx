import { useContext } from "react";
import { Navigate, RouteProps, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = (props: RouteProps) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user?.token) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <>{props.element}</>;
};

export default ProtectedRoute;
