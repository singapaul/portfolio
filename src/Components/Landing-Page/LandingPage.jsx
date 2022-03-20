import React from "react";
import "./LandingPage.scss";
import landingSVG from "../../Assets/Graphics/landing.svg";

const LandingPage = () => {
  return (
    <>
      <div className="landingPage">
        <div className="landingPage__vanityCard">
          <p>👋 Hi, I'm...</p>
          <h1>Paul Hardman</h1>
          <h2>A Web Developer</h2>
          <button><a href="#projects">VIEW MY WORK</a></button>
        </div>
        <div className="landingPage__landingGraphic">
          <img src={landingSVG} alt="" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
