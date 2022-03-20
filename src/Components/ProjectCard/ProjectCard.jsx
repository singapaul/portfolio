import React from "react";
import "./ProjectCard.scss";

const ProjectCard = ({ props, onClick }) => {
  return (
    <div onClick={onClick} className={`ProjectCard ProjectCard${props.id}`}>
      <img src={props.image} alt="" className={`ProjectCard-image project${props.id}`} />
    </div>
  );
};

export default ProjectCard;
