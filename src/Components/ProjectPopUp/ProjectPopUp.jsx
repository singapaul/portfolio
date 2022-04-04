import "./ProjectPopUp.scss";
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
        <button onClick={onClick} class="projectPopUp__details-blackcross">
          X
        </button>

        <div className="projectPopUp__details-desc">
          <h1>{currentCard.title}</h1>
          <p>{currentCard.description}</p>
        </div>

        <div className="projectPopUp__details-links">
          <a target="_blank" href={currentCard.site} rel="noreferrer">
            DEMO
          </a>
          <a target="_blank" href={currentCard.github} rel="noreferrer">
            {`CODE </>`}
          </a>
        </div>

        <div className="projectPopUp__details-stack">
          <h2>The Stack</h2>
          <div className="projectPopUp__details-stack-items">
            {currentCard.techStack.map((tech) => {
              return <p>{tech}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPopUp;
