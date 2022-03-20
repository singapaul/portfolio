import React from "react";
import ProjectPopUp from "../ProjectPopUp/ProjectPopUp";
import "./ProjectCard.scss";

const ProjectCard = ({ props }) => {
  return (
    <>
      {true? (
        <div className={`ProjectCard ProjectCard${props.id}`}>
          <img src={props.image} alt="" className={`ProjectCard-image`} />
        </div>
      ) : (
        <div>
          <ProjectPopUp/>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
