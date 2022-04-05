import "./Navbar.scss";
import useWindowSize from "../../hooks/useWindowSize.js";
import { useState } from "react";
import hamburger from "../../Assets/Graphics/hamburger-menu.svg";
import cross from "../../Assets/Graphics/black-cross.png";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const windowIsDesktop = useWindowSize(1024);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const menuIcon = showMenu ? cross : hamburger;
  const navbarClass = (showMenu && !windowIsDesktop) ? "navbar navbar--active" : "navbar";


  // Defining the desktop nav
  const desktopNav = (
    <ul className="navbar__links">
      <Link
        to="portfolio/#projects"
        className="navbar__links-sectionLink"
        onClick={handleClick}
      >
        Projects
      </Link>

      <Link
        to="portfolio/#about"
        className="navbar__links-sectionLink"
        onClick={handleClick}
      >
        About
      </Link>

      <Link
        to="portfolio/#contact"
        className="navbar__links-sectionLink"
        onClick={handleClick}
      >
        Contact
      </Link>

      <Link
        to="portfolio/timeline"
        className="navbar__links-sectionLink"
        onClick={handleClick}
      >
        Timeline
      </Link>
      <a
        className="navbar__links-sectionLink"
        target="_blank"
        onClick={handleClick}
        href="https://www.instagram.com/perspectivesfrompaul/"
        rel="noreferrer"
      >
        Photography
      </a>
    </ul>
  );

  // Defining the mobile/tablet nav
  const mobileNav = (
    <ul className="navbar__links">
      <Link
        to="portfolio/#landing"
        className="navbar__links-sectionLink"
        onClick={handleClick}
      >
        Home
      </Link>

      <Link
        to="portfolio/#projects"
        className="navbar__links-sectionLink"
        onClick={handleClick}
      >
        Projects
      </Link>

      <Link
        to="portfolio/#about"
        className="navbar__links-sectionLink"
        onClick={handleClick}
      >
        About
      </Link>

      <Link
        to="portfolio/#contact"
        className="navbar__links-sectionLink"
        onClick={handleClick}
      >
        Contact
      </Link>

      <Link
        to="portfolio/timeline"
        className="navbar__links-sectionLink"
        onClick={handleClick}
      >
        Timeline
      </Link>
      <a
        className="navbar__links-sectionLink"
        target="_blank"
        onClick={handleClick}
        href="https://www.instagram.com/perspectivesfrompaul/"
        rel="noreferrer"
      >
        Photography
      </a>
    </ul>
  );

  return (
    <>
      <div className={navbarClass}>
        <div className="navbar__container">
          <Link className="navbar__container-icon" to="portfolio">
            PH
          </Link>
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
