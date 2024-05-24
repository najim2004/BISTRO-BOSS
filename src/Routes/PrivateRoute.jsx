import PropTypes from "prop-types";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (user) return children;
  if (loading) {
    return (
      <div className="w-full flex justify-center">
        <span className="loading loading-infinity loading-lg"></span>
      </div>
    );
  }
  return <Navigate to={"/login"} state={{ from: location }} replace />;
};

PrivateRoute.propTypes = {
  children: PropTypes.object.isRequired,
};
export default PrivateRoute;
