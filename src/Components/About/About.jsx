import React from "react";
import "./About.scss";
import aboutSVG from "../../Assets/Graphics/about.svg";

const About = () => {
  return (
    <div className="about">
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
            Hey, I’m Paul, I’m from Wales. I trained as a chemical engineer and
            used to work in the drinks industry manufacturing coffee and scotch.
            Now I work in tech, I love retro designs and bauhaus, which is why I’ve made this site in this style. In my spare time I love photography, b
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
