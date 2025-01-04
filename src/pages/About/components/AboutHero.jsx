import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  const stats = [
    {
      number: "55",
      label: "Success projects",
    },
    {
      number: "52",
      label: "Placated clients",
    },
    {
      number: "5+",
      label: "Experienced developers",
    },
  ];

  return (
    <section className="about-hero">
      <div className="about-container">
        <span className="about-label">About us</span>

        <h1 className="about-title">Our strength is collaboration</h1>

        <div className="about-content">
          <p className="about-lead">
            We believe that our strength lies in our collaborative approach,
            which puts our clients at the center of everything we do.
          </p>

          <p className="about-text">
            TadalateStudio was started by three friends who noticed that
            developers were charging clients double what an in-house team would
            cost. Since the beginning, we have been committed to doing things
            differently.
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
