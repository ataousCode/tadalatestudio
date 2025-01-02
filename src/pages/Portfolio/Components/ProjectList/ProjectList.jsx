import React, { useState } from "react";
import { Link } from "react-router-dom";
import HTML from "../../../../Images/html.svg"; // Ensure this path is correct
// Import placeholder logo
import "./ProjectList.css";

const ProjectList = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewType, setViewType] = useState("list");

  const projects = [
    {
      id: 1,
      title: "Strydd - Training App",
      description:
        "A training app that utilizes AI to help its users to perform workouts accurately, share their own workout videos, and explore workout videos from other trainers.",
      logo: HTML, // Use imported placeholder logo
      image: HTML, // Use imported HTML image
      type: "mobile",
      responsibilities: [
        "Digital Product Design",
        "Flutter iOS App Development",
        "AI integration",
        "Backend Development - Firebase",
      ],
    },
    {
      id: 2,
      title: "Enjoy - TV Movies App",
      description:
        "EnjoyTV is an advanced video controller for major streaming platforms. Simply connect your existing accounts from hulu, netflix, disney+, and more. Then enjoy our apps enhanced watch experience",
      logo: HTML, // Use imported placeholder logo
      image: HTML, // Use imported HTML image
      type: "tv",
      responsibilities: [
        "Digital Product Design",
        "Flutter Multi-platform Android, iOS & TV App Development",
        "Backend Development - Firebase",
      ],
    },
    {
      id: 3,
      title: "Enjoy - TV Movies App",
      description:
        "EnjoyTV is an advanced video controller for major streaming platforms. Simply connect your existing accounts from hulu, netflix, disney+, and more. Then enjoy our apps enhanced watch experience",
      logo: HTML, // Use imported placeholder logo
      image: HTML, // Use imported HTML image
      type: "tv",
      responsibilities: [
        "Digital Product Design",
        "Flutter Multi-platform Android, iOS & TV App Development",
        "Backend Development - Firebase",
      ],
    },
    {
      id: 4,
      title: "Enjoy - TV Movies App",
      description:
        "EnjoyTV is an advanced video controller for major streaming platforms. Simply connect your existing accounts from hulu, netflix, disney+, and more. Then enjoy our apps enhanced watch experience",
      logo: HTML, // Use imported placeholder logo
      image: HTML, // Use imported HTML image
      type: "tv",
      responsibilities: [
        "Digital Product Design",
        "Flutter Multi-platform Android, iOS & TV App Development",
        "Backend Development - Firebase",
      ],
    },
  ];

  const filteredProjects = projects.filter(
    (project) => activeFilter === "all" || project.type === activeFilter
  );

  return (
    <section className="project-list">
      <div className="project-list-header">
        <div className="filter-buttons">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => setActiveFilter("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${
              activeFilter === "mobile" ? "active" : ""
            }`}
            onClick={() => setActiveFilter("mobile")}
          >
            Mobile Apps
          </button>
          <button
            className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
            onClick={() => setActiveFilter("web")}
          >
            Web Apps
          </button>
          <button
            className={`filter-btn ${activeFilter === "tv" ? "active" : ""}`}
            onClick={() => setActiveFilter("tv")}
          >
            TV Apps
          </button>
        </div>

        <div className="view-toggle">
          <span>List View</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={viewType === "grid"}
              onChange={() =>
                setViewType(viewType === "grid" ? "list" : "grid")
              }
            />
            <span className="slider round"></span>
          </label>
          <span>Grid View</span>
        </div>
      </div>

      <div className={`projects-container ${viewType}`}>
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-content">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <div className="project-header">
                  <img src={project.logo} alt="" className="project-logo" />
                  <h2>{project.title}</h2>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="responsibilities">
                  <h3>We are responsible for:</h3>
                  <div className="responsibility-tags">
                    {project.responsibilities.map((responsibility, index) => (
                      <span key={index} className="responsibility-tag">
                        {responsibility}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  to={`/case-study/${project.id}`}
                  className="case-study-btn"
                >
                  VIEW CASE STUDY
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
