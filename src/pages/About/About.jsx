import React from "react";
import { FaMobile, FaGraduationCap, FaYoutube } from "react-icons/fa";
import "./About.css";
import QualityPillars from "../../components/QualityPillars/QualityPillars";
import MissionVision from "../../components/MissionVision/MissionVision";
import CompanyStats from "../../components/CompanyStats/CompanyStats";
import CoreValues from "../../components/CoreValues/CoreValues";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import AboutHero from "./components/AboutHero";

const About = () => {
  const cards = [
    {
      icon: <FaMobile className="card-icon" />,
      title: "Development",
      description:
        "We specialize in crafting, developing, and scaling your app and website projects, offering exceptional expertise and delivering outstanding performance.",
      buttonText: "Start Project",
      buttonLink: "/contact",
    },
    {
      icon: <FaGraduationCap className="card-icon" />,
      title: "Flutter Bootcamp",
      description:
        "Join our Flutter Bootcamp for a comprehensive, hands-on learning experience designed to take you from Newbie to Expert in Flutter development.",
      buttonText: "Join Now",
      buttonLink: "/bootcamp",
    },
    {
      icon: <FaYoutube className="card-icon" />,
      title: "Youtube",
      description:
        "Discover our YouTube channel for engaging video tutorials and helpful live streams led by respected leaders from the active Flutter Community.",
      buttonText: "Watch Now",
      buttonLink: "https://youtube.com",
    },
  ];

  return (
    <div className="about-page">
      <AboutHero />
      <div className="hero-section">
        <div className="overlay"></div>
        {/* <div className="content">
          <h1>
            We helped 2+ Million Flutter Developers
          </h1>
          <p>
            Explore Flutter Tutorials on our YouTube channel.
            <br />
            Perfect for beginners and pros, our videos help you
            <br />
            to learn Mobile App and Website Development.
          </p>
        </div> */}

        <div className="cards-container">
          {cards.map((card, index) => (
            <div key={index} className="info-card">
              <div className="card-content">
                {card.icon}
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <a href={card.buttonLink} className="cta-button">
                  {card.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <QualityPillars />
      <MissionVision />
      <CompanyStats />
      <CoreValues />
      <WhyChooseUs />
    </div>
  );
};

export default About;
