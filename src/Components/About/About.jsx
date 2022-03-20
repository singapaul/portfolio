import React from "react";
import "./About.scss";
import aboutSVG from "../../Assets/Graphics/about.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__greeting">
        <h1 className="about__greeting-title">
          About <strong>Me</strong>
        </h1>
      </div>
      <div className="about__content">
        <div className="about__content-graphic">
          <img
            src={aboutSVG}
            alt="a visual graphic"
            className="about__content-graphic-img"
          />
        </div>
        <div className="about__content-text">
          <p className="about__content-text-tag">
            Hi, I’m Paul and I'm a junior full stack software engineer. I
            originally trained as a chemical engineer and started my career in
            the drinks industry working as a supply chain engineer. It was
            during this time that I discovered a passion for the visual side of
            front end, the technical wonder of back end and an amazement for the
            transformative ways in which technology can transform lives.
            <br />
            <br />
            On the weekends you'll catch me sipping a coffee, stuck in a good
            book or flying down the Welsh mountains on my bike!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
