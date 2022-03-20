import React, { useState } from "react";
import "./Projects.scss";
import { projectsData } from "../../Assets/Data/projectsData";
import ProjectCard from "../ProjectCard/ProjectCard";
import ProjectPopUp from "../ProjectPopUp/ProjectPopUp";

const Projects = () => {
  const [showCard, setShowCard] = useState(false);
  const [whichCard, setWhichCard] = useState();

  let currentProj;
  const handleOpenCard = (event) => {
    setShowCard(!showCard);
    currentProj = event.target.className.slice(-1) - 1;
    // sets to the index
   setWhichCard(currentProj)
  };


  return (
    <div id="projects" className="projects">
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
            <div className="projects__section-popUp">
              {/* The props we pass in here needs to match the id number of the event */}

              <ProjectPopUp
                whichCard = {whichCard}
                onClick={handleOpenCard}
              />
            </div>
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
