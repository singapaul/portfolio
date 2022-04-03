import React from "react";
import "./LandingPage.scss";
import landingSVG from "../../Assets/Graphics/landing.svg";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const LandingPage = () => {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      typeSpeed: 80,
      backDelay: 1200,
      startDelay: 500,
      backSpeed: 100,
      strings: ["Software Engineer", "Mountain Runner", "Web Developer", "Street Photographer", "Tech blogger", "Bauhaus lover extordanaire"],
    });
  }, []);

  return (
    <>
      <div className="landingPage">
        <div className="landingPage__vanityCard">
          <p>Hi 👋, I'm...</p>
          <h1>Paul Hardman</h1>
          <h2>
            <span id="textRef" ref={textRef}></span>
          </h2>
          <button>
            <a href="#projects">VIEW MY WORK</a>
          </button>
        </div>
        <div className="landingPage__landingGraphic">
          <img src={landingSVG} alt="" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
