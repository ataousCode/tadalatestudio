import React from "react";
import { Link } from "react-router-dom";
import HTML from "../../Images/html.svg";
import "./Portfolio.css";
import ProjectList from "./Components/ProjectList/ProjectList";
import ContactForm from "../../components/SayHi/SayHi";
import ContactButton from "../Contact/components/ContactButton";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <section className="portfolio-hero">
        <div className="hero-content">
          <div className="text-content">
            <h1>Our Portfolio</h1>
            <p>
              Our Portfolio with case studies and success stories from our
              clients around the world. We could be your next success story and
              help you to transform your project into reality.
            </p>
            {/* <Link to="/contact" className="contact-button">
              CONTACT US <ContactButton text="GET IN TOUCH" />
            </Link> */}
            <ContactButton text="GET IN TOUCH" />
          </div>
          <div className="devices-mockup">
            <img
              src={HTML}
              alt="Responsive design showcase on multiple devices"
              className="devices-image"
            />
          </div>
        </div>
      </section>

      <ProjectList />
      <ContactForm />
    </div>
  );
};

export default Portfolio;
