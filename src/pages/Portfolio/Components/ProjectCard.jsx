import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project, viewType }) => {
  return (
    <div className={`project-card ${viewType}`}>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-content">
        <div className="project-header">
          <img src={project.logo} alt="" className="project-logo" />
          <h3>{project.title}</h3>
        </div>
        <p className="project-description">{project.description}</p>
        <div className="project-responsibilities">
          <h4>We are responsible for:</h4>
          <div className="responsibility-tags">
            {project.responsibilities.map((responsibility, index) => (
              <span key={index} className="responsibility-tag">
                {responsibility}
              </span>
            ))}
          </div>
        </div>
        <button className="view-case-study">VIEW CASE STUDY</button>
      </div>
    </div>
  );
};

export default ProjectCard;
