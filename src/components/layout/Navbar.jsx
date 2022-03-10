import PropTypes from "prop-types";
import { SiEpicgames } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  return (
    <div class="navbar bg-base-100 mb-5 shadow-xl rounded-box">
      <div className="navbar-start">
        <SiEpicgames className="text-5xl" />
      </div>
      <div className="navbar-center">
        <Link to="/" className="text-3xl font-extrabold font-mono">
          {title}
        </Link>
      </div>
      <div className="navbar-end">
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>
        <Link to="/about" className="btn btn-ghost">
          About
        </Link>
        <Link to="/login" className="btn btn-ghost">
          Login
        </Link>
      </div>
    </div>
  );
};

Navbar.defaultProps = {
  title: "GameRZ",
};

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
