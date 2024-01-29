import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../systems/provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-[80vh] flex justify-center items-center">
        <h3 className="text-info">Loading</h3>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  children: PropTypes.any.isRequired,
};

export default PrivateRoute;
