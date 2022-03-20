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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            sint velit harum perspiciatis ullam quo repellat. Suscipit
            consectetur nisi dignissimos est consequuntur nesciunt cumque? Culpa
            id velit fuga magni dolorum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
