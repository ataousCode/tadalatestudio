import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./GuidanceSection.css";
import Form from "./Form/Form";

const GuidanceSection = () => {
  const features = [
    "Top Advices & Best Practices",
    "New Features & Fixed Bugs",
    "High-Level Customer Support",
  ];

  return (
    <section className="guidance-section">
      <div className="guidance-content">
        <h2>
          Meet our team <span className="highlight">guidance</span>
          <br />
          for your business needs
        </h2>
        <p className="guidance-description">
          Empower your project with strategic guidance and unparalleled
          technical expertise.
        </p>
        <p className="guidance-subtitle">
          Gain from our team consultants' wealth of expertise to simplify
          processes, refine workflows, and ignite innovation in your projects.
        </p>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index}>
              <FaArrowRight className="arrow-icon" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="form-container">
        <Form />
      </div>
    </section>
  );
};

export default GuidanceSection;
