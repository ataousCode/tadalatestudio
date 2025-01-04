import React from "react";
import { FaCheck, FaAndroid, FaApple } from "react-icons/fa";
import WE from "../../Images/we.png";
import "./WhyTrustUs.css";

const WhyTrustUs = () => {
  const benefits = [
    "Comprehensive App Solutions Across Platforms",
    "Custom Development to Meet Your Unique Requirements",
    "Focus on Security and Performance",
    "Timely Delivery, Every Time",
    "Risk Management and Ongoing Support",
  ];

  return (
    <section className="why-trust-us">
      <div className="container">
        <div className="content">
          <div className="text-content">
            <h2>Why TadalateStudio</h2>
            <p>
              TadalateStudio is your partner in building cutting-edge apps
              across platforms. Whether you need mobile, web, or custom
              enterprise solutions, we offer innovative, secure, and scalable
              development that drives business growth. Our commitment to
              delivering high-quality results makes us the trusted choice for
              top brands.
            </p>
            <ul className="benefits-list">
              {benefits.map((benefit, index) => (
                <li key={index}>
                  <FaCheck className="check-icon" />
                  {benefit}
                </li>
              ))}
            </ul>
            <button className="cta-button">GET IN TOUCH</button>
          </div>
          <div className="image-content">
            <div className="platform-icons">
              <div className="platform-icon">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" />
              </div>
              <div className="platform-icon">
                <FaApple />
              </div>
            </div>
            <img src={WE} alt="Development Team" className="team-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
