import React from "react";
import "./Projects.scss";
import { projectsData } from "../../Assets/Data/projectsData";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  console.log(projectsData);

  return (
    <div id="projects" className="projects">
      <div className="projects__section">
        <div className="projects__section-tile">
          {projectsData.map((project)=> {
            return <ProjectCard key={project.id} props={project} />
          })}
          
        </div>
        <div className="projects__section-blueLine"></div>
      </div>
      <div className="projects__greeting">
        <h1 className="projects__greeting-title">Checkout my work</h1>
      </div>
    </div>
  );
};

export default Projects;
