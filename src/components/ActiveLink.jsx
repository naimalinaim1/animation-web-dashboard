import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "flex text-secondary font-bold" : "flex"
      }
    >
      {children}
    </NavLink>
  );
};

ActiveLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};

export default ActiveLink;
