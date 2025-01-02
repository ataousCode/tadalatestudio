import React from "react";
import {
  FaUsers,
  FaStar,
  FaTrophy,
  FaHandshake,
  FaClipboardCheck,
  FaPeopleCarry,
} from "react-icons/fa";
import "./CoreValues.css";

const CoreValues = () => {
  const values = [
    {
      icon: <FaUsers />,
      title: "Put the customers first",
      description:
        "We prioritize understanding and meeting the needs of our customers above all else. Their satisfaction and success drive our decisions and actions",
    },
    {
      icon: <FaStar />,
      title: "Deliver WOW experiences",
      description:
        "We strive to go above and beyond in every interaction, aiming to create memorable and extraordinary experiences that exceed expectations and leave a lasting impression",
    },
    {
      icon: <FaTrophy />,
      title: "Focus on Exceptional Quality",
      description:
        "Quality is at the forefront of everything we do. We are committed to delivering products and services of the highest standard, ensuring excellence in every aspect of our work",
    },
    {
      icon: <FaHandshake />,
      title: "Build Honest relationships",
      description:
        "Trust and integrity form the foundation of our relationships, both within our team and with our customers and partners. We communicate openly, act with transparency, and uphold honesty in all our interactions",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Cultivate Responsibility",
      description:
        "We take ownership of our actions and their outcomes. Each team member is accountable for their contributions and strives to fulfill their responsibilities with diligence and professionalism",
    },
    {
      icon: <FaPeopleCarry />,
      title: "Encourage Teamwork",
      description:
        "Collaboration is key to our success. We foster an environment where teamwork is valued and encouraged, recognizing that by working together, we can achieve greater results and overcome challenges more effectively",
    },
  ];

  return (
    <section className="core-values">
      <div className="container">
        <h2>Our Core Values</h2>
        <p className="subtitle">
          Guided by our values, we strive for excellence.
        </p>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
