import "./Navbar.scss";
import useWindowSize from "../../hooks/useWindowSize.js";
import { useState } from "react";
import hamburger from "../../Assets/Graphics/hamburger-menu.svg";
import cross from "../../Assets/Graphics/black-cross.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const windowIsDesktop = useWindowSize(1024);


  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const menuIcon = showMenu ? cross : hamburger;
  const navbarClass = showMenu ? "navbar navbar--active" : "navbar";

  // Defining the desktop nav
  const desktopNav = (
    <ul className="navbar__links">
      <a className="navbar__links-sectionLink" href="#projects">
        Projects
      </a>
      <a className="navbar__links-sectionLink" href="#about">
        About
      </a>
      <a className="navbar__links-sectionLink" href="#contact">
        Contact
      </a>
      <a className="navbar__links-sectionLink" href="timeline">
        Timeline
      </a>
      <a className="navbar__links-sectionLink" href="#contact">
        Photography
      </a>
    </ul>
  );

  // Defining the mobile/tablet nav
  const mobileNav = (
    <ul className="navbar__links">
      <a className="navbar__links-sectionLink" href="#hg" onClick={handleClick}> 
        Home
      </a>
      <a className="navbar__links-sectionLink" href="#projects" onClick={handleClick}>
        Projects
      </a>
      <a className="navbar__links-sectionLink" href="#about" onClick={handleClick}>
        About
      </a>
      <a className="navbar__links-sectionLink" href="#contact" onClick={handleClick}>
        Contact
      </a>
      <a className="navbar__links-sectionLink" href="timeline" onClick={handleClick}>
        Timeline
      </a>
      <a className="navbar__links-sectionLink" href="#contact" onClick={handleClick}>
        Photography
      </a>
    </ul>
  );

  return (
    <>
      <div className={navbarClass}>
        <div className="navbar__container">
          <a href="/portfolio" className="navbar__container-icon">
            PH
          </a>
          {windowIsDesktop ? (
            desktopNav
          ) : (
            <button onClick={handleClick} className="navbar__container-button">
              <img
                src={menuIcon}
                className="navbar__container-button-image"
                alt=""
              />
            </button>
          )}
        </div>
        {!windowIsDesktop && showMenu && mobileNav}
      </div>
    </>
  );
};

export default Navbar;
