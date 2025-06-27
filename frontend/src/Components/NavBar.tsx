import React from "react";
import { Link } from "react-router-dom";
import "../Styles/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="NavBar">
      <div className="nav-left">
        <a href="#logo" className="logo-link">
          <span className="#about">Logo</span>
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="nav-login">
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
