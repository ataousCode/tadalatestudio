import React from "react";
import { FaUserTie, FaPhoneAlt, FaMoneyBillWave } from "react-icons/fa";
import "./ConsultingProcess.css";

const ConsultingProcess = () => {
  const processes = [
    {
      icon: <FaUserTie />,
      title: "Hire Developers",
      description:
        "Choose one or multiple Flutter Expert Developers from our team with great experience in working on large Flutter projects with clients around the world.",
      
    },
    {
      icon: <FaPhoneAlt />,
      title: "Have Calls on Demand",
      description:
        "Have regular calls with the chosen developers - that guide you and help you to structure your project. Hire these developers flexibly on an hourly basis.",
      
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Pay as you go",
      description:
        "Book with us a consulting package with a minimum duration of 10 hours or more. You can add flexibly additional hours of consulting based on your requirements.",
      
    },
  ];

  return (
    <div className="consulting-process">
      <div className="process-grid">
        {processes.map((process, index) => (
          <div key={index} className="process-card">
            <div className="icon-wrapper">{process.icon}</div>
            <h3>{process.title}</h3>
            <p>{process.description}</p>
            {/* <a href={process.buttonLink} className="process-button">
              {process.buttonText}
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConsultingProcess;
