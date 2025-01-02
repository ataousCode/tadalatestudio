import React from "react";
import "./QualityPillars.css";

const QualityPillars = () => {
  const qualities = [
    {
      title: "Quality Code",
      description:
        "Our commitment to quality code sets us apart. We meticulously craft each line to ensure efficiency, reliability, and maintainability. With a keen eye for detail and adherence to industry best practices, our code reflects our dedication to delivering a solid foundation for your project",
    },
    {
      title: "Quality Service",
      description:
        "Experience top-tier service that goes beyond expectations. Our team is dedicated to providing a seamless and responsive experience. From project inception to post-launch support, we prioritize clear communication, timely updates, and a client-centric approach. Your satisfaction is our ultimate measure of success",
    },
    {
      title: "Quality Applications",
      description:
        "Elevate your project with a quality application that stands out. We focus on user-centric design, robust functionality, and a seamless user experience. Rigorous testing ensures a bug-free application, while continuous improvement guarantees that your software stays relevant and effective. Trust us to deliver a high-quality application that exceeds your expectations",
    },
  ];

  return (
    <section className="quality-pillars">
      <div className="container">
        <h2>Our 3 Q's</h2>
        <div className="qualities-grid">
          {qualities.map((quality, index) => (
            <div key={index} className="quality-card">
              <h3>{quality.title}</h3>
              <p>{quality.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityPillars;
