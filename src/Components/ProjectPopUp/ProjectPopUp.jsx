import "./ProjectPopUp.scss";
import blackCross from "../../Assets/Graphics/black-cross.png";
import React from "react";
import { projectsData } from "../../Assets/Data/projectsData";

const ProjectPopUp = ({ onClick, whichCard }) => {
  const currentCard = projectsData[whichCard];
  return (
    <div className="projectPopUp">
      <div className="projectPopUp__imageHolder">
        <img
          className="projectPopUp__imageHolder-image"
          src={currentCard.image}
          alt=""
        />
      </div>
      <div className="projectPopUp__details">
        <img
          onClick={onClick}
          class="projectPopUp__details-blackcross"
          src={blackCross}
          alt=""
        />
        <h1>{currentCard.title}</h1>
        <p>{currentCard.description}</p>
        <h2>The Stack</h2>
        <div>
          {currentCard.techStack.map((tech) => {
            return <li>{tech}</li>;
          })}
        </div>

        <div>
          <a target="_blank" href={currentCard.site} rel="noreferrer">
            Demo
          </a>
          <a target="_blank" href={currentCard.github} rel="noreferrer">
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopUp;
