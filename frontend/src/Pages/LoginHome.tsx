import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/LoginHome.css";

const LoginHome = () => {
  return (
    <nav className="login-nav-bar">
      <ul className="login-nav-links">
        <li>
          <Link to="/macrotracker" className="macro-tracker">
            MacroTrack
          </Link>
        </li>
        <li>
          <Link to="/WeightTrack" className="weight-tracker">
            WeightTrack
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default LoginHome;
