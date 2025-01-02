import React from "react";
import { FaArrowRight } from "react-icons/fa";
import WE from "../../Images/we.png";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const reasons = [
    "Expertise Beyond Boundaries",
    "Tailored Solutions, Every Time",
    "Proven Track Record of Success",
    "Client-Centric Focus",
    "Innovation at the Core",
    "Reliable and Timely Delivery",
  ];

  return (
    <section className="why-choose-us">
      <div className="container">
        <div className="content-wrapper">
          <div className="text-content">
            <h2>Why Choose Us?</h2>
            <p className="subtitle">
              Choosing us means stepping into a realm of unparalleled expertise
              and unwavering commitment. We stand out as your ideal partner in
              the journey of innovation and progress
            </p>
            <div className="reasons-grid">
              {reasons.map((reason, index) => (
                <div key={index} className="reason-item">
                  <FaArrowRight className="arrow-icon" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="image-content">
            <img
              src={WE}
              alt="Professional at work"
              className="professional-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
