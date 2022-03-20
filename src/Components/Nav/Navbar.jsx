import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <a href="#Home" className="Navbar__icon">
        PH
      </a>
      <ul className="Navbar__links">
        <a className="Navbar__links-sectionLink" href="#projects">
          Projects
        </a>
        <a className="Navbar__links-sectionLink" href="#about">
          About
        </a>
        <a className="Navbar__links-sectionLink" href="#contact">
          Contact
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
