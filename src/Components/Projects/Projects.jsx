import React, { useState, useRef } from "react";
import "./Projects.scss";
import { projectsData } from "../../Assets/Data/projectsData";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectPopUp from "../ProjectPopUp/ProjectPopUp";
import disableScroll from "disable-scroll";

const Projects = () => {
  const [showCard, setShowCard] = useState(false);
  const [whichCard, setWhichCard] = useState();
  const myRef = useRef(null);

  let currentProj;
  const executeScroll = () => myRef.current.scrollIntoView();

  const handleOpenCard = (event) => {
    setShowCard(!showCard);
    currentProj = event.target.className.slice(-1) - 1;
    // sets to the index
    setWhichCard(currentProj);

    executeScroll();
  };

  const handleCloseCard = () => {
    setShowCard(!showCard);
    disableScroll.off();
  };

  return (
    <div ref={myRef} id="projects" className="projects">
      {showCard && <div className="filler"></div>}
      <div className="projects__section">
        <div className="projects__section-tile">
          {projectsData.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                props={project}
                onClick={handleOpenCard}
              />
            );
          })}

          {showCard && (
            <ProjectPopUp whichCard={whichCard} onClick={handleCloseCard} />
          )}
        </div>
        <div className="projects__section-blueLine"></div>
      </div>
      <div className="projects__greeting">
        <h1 className="projects__greeting-title">Check out my work</h1>
      </div>
    </div>
  );
};

export default Projects;
