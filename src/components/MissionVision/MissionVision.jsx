import React from "react";
import { FaEye, FaRocket, FaBullseye } from "react-icons/fa";
import "./MissionVision.css";

const MissionVision = () => {
  const cards = [
    {
      icon: <FaEye />,
      title: "Vision",
      description:
        "In envisioning the future, we see a world transformed by innovation and empowered by technology. Our vision is to be at the forefront of this change, pioneering solutions that redefine industries, inspire progress and make a positive impact on a global scale",
    },
    {
      icon: <FaRocket />,
      title: "Mission",
      description:
        "Our mission is to create a lasting and meaningful difference through cutting-edge technology and unwavering commitment. We strive to empower businesses and individuals by delivering innovative solutions, fostering growth, and driving positive change. With a passion for excellence, we aim to be a driving force in shaping a better tomorrow",
    },
    {
      icon: <FaBullseye />,
      title: "Goal",
      description:
        "At the core of our aspirations is a clear goal – to consistently exceed expectations and set new standards of excellence. We are dedicated to achieving sustainable success by fostering a culture of creativity, collaboration, and continuous improvement. Our goal is not just to meet industry benchmarks but to surpass them, ensuring that every endeavor reflects our commitment to excellence and leaves a lasting legacy",
    },
  ];

  return (
    <section className="mission-vision">
      <div className="container">
        <h2>Our Mission & Vision</h2>
        <div className="cards-grid">
          {cards.map((card, index) => (
            <div key={index} className="vision-card">
              <div className="icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
