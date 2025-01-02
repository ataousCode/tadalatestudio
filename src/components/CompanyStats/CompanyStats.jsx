import React from "react";
import MOBILE from '../../Images/mobil.png';
import "./CompanyStats.css";

const CompanyStats = () => {
  const stats = [
    {
      number: "760+",
      label: "YouTube Videos",
    },
    {
      number: "200K+",
      label: "Youtube Subscribers",
    },
    {
      number: "3+ Million",
      label: "People We Helped",
    },
    {
      number: "30+",
      label: "Projects Developed",
    },
    {
      number: "10+",
      label: "Flutter Experts",
    },
    {
      number: "2017",
      label: "Flutter Development Since",
    },
  ];

  return (
    <section className="company-stats">
      <div className="container">
        <div className="content-wrapper">
          <div className="image-section">
            <img
              src={MOBILE}
              alt="Flutter Developer"
              className="developer-image"
            />
          </div>
          <div className="text-section">
            <h2>
              If you're looking for the development partner that "gets it", has
              a strong technology stack and a few brilliant ideas up their
              sleeves, read on.
            </h2>
            <p>
              HeyFlutter is your premier development partner, specializing in
              creating cutting-edge apps using Flutter technology. With a deep
              understanding of your needs, we offer a strong technology stack
              and a treasure trove of brilliant ideas to bring your vision to
              life. Whether you're a startup or an established company, we're
              here to help you build, scale, and innovate. Let's collaborate and
              make your app dreams a reality!
            </p>
          </div>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;
