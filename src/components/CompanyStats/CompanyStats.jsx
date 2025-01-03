import React from "react";
import MOBILE from '../../Images/mobil.png';
import "./CompanyStats.css";

const CompanyStats = () => {
  const stats = [
    {
      number: "70+",
      label: "Projects Developed",
    },
    {
      number: "10+",
      label: "Developer Experts",
    },
    {
      number: "2017",
      label: "Web Development Since",
    },
    {
      number: "2019",
      label: "UX/UI Design Since",
    },
    {
      number: "2019",
      label: "Cloud Computing Since",
    },
    {
      number: "2021",
      label: "Mobile App Development Since",
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
              TadalateStudio is your premier development partner, specializing in
              creating cutting-edge apps using the latest technology. With a deep
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
