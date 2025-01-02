import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import WE from "../../Images/we.png"; // Import the image
import MOBILE from "../../Images/mobile.png"; // Import the image
import "./Portfolio.css";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Strydd - Training App",
      description:
        "A training app that utilizes AI to help its users to perform workouts accurately, share their ow...",
      image: WE, // Directly assign the imported image
      logo: WE, // Directly assign the imported image
    },
    {
      title: "Enjoy - TV Movies App",
      description:
        "EnjoyTV is an advanced video controller for major streaming platforms. Simply connect yo...",
      image: MOBILE, // Directly assign the imported image
      logo: MOBILE, // Directly assign the imported image
    },
    {
      title: "Digcoach - Club Manager",
      description:
        "Digcoach helps clubs to manage it is customers, coaches, the scheduling of appointments, the ...",
      image: WE, // Directly assign the imported image
      logo: WE, // Directly assign the imported image
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="portfolio">
      <div className="container">
        <h2>We delivered many successful Products</h2>
        <p className="subtitle">
          Learn about the different apps and websites we have developed
        </p>

        <div className="portfolio-actions">
          <button className="action-button">SEE PORTFOLIO</button>
        </div>

        <div className="portfolio-slider">
          <button className="nav-button prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>

          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`portfolio-card ${
                  index === currentSlide ? "active" : ""
                }`}
              >
                <img
                  src={project.image} // Use the image directly
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-info">
                  <div className="project-header">
                    <img
                      src={project.logo} // Use the logo directly
                      alt=""
                      className="project-logo"
                    />
                    <h3>{project.title}</h3>
                  </div>
                  <p>{project.description}</p>
                  <button className="view-case-study">View Case Study</button>
                </div>
              </div>
            ))}
          </div>

          <button className="nav-button next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>

        <div className="portfolio-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
