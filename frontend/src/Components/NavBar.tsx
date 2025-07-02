import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "../Styles/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <span>Logo</span>
      </div>
      <ul className="nav-links">
        <li>
          <ScrollLink
            to="about"
            smooth={true}
            offset={-70}
            duration={500}
            className="about-link"
          >
            About
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            className="service-link"
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className="contact-link"
          >
            Contact
          </ScrollLink>
        </li>
      </ul>

      <div className="nav-login">
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
