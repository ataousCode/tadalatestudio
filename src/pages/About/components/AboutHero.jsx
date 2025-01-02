import React from "react";
import "./AboutHero.css";

const AboutHero = () => {
  const stats = [
    {
      number: "35",
      label: "Underpaid employees",
    },
    {
      number: "52",
      label: "Placated clients",
    },
    {
      number: "$25M",
      label: "Invoices billed",
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
            Studio was started by three friends who noticed that developer
            studios were charging clients double what an in-house team would
            cost. Since the beginning, we have been committed to doing things
            differently by charging triple instead.
          </p>

          <p className="about-text">
            At Studio, we're more than just colleagues – we're a family. This
            means we pay very little and expect people to work late. We want our
            employees to bring their whole selves to work. In return, we just
            ask that they keep themselves there until at least 6:30pm.
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
