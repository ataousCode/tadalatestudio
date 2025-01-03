import React from "react";
import classes from "./Offered.module.css";
import WE from "../../../Images/WE.png";
import MOBILE from "../../../Images/mobil.png";

const ServiceCard = ({ title, description, image, reverse }) => {
  return (
    <div className={`${classes.serviceCard} ${reverse ? classes.reverse : ""}`}>
      <div className={classes.serviceContent}>
        <img src={image} alt={title} className={classes.serviceImage} />
        <div className={classes.serviceInfo}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const Offered = () => {
  return (
    <section className={classes.servicesOffered}>
      <h2>How do we help you and your team?</h2>
      <div className={classes.servicesGrid}>
        {/* First Card */}
        <ServiceCard
          title="Help to Implement Features"
          description="Struggling to add new features to your project? Our team of
            experienced developers is here to help. We'll work closely with
            you to understand your requirements and turn your ideas into
            reality. From conceptualization to implementation, we'll ensure
            that the new features meet your expectations and align with your
            project goals. Partner with us to bring your app to the next
            level."
          image={WE}
          reverse={false}
        />

        {/* Second Card */}
        <ServiceCard
          title="Analyze & Code Restructure"
          description="Is your project codebase in need of a makeover? Our team
            specializes in code analysis and restructuring to help you
            achieve cleaner, more efficient code. We'll conduct a
            comprehensive review of your codebase, identify areas for
            optimization, and implement strategic restructuring to improve
            maintainability and scalability. Let's breathe new life into
            your code."
          image={MOBILE}
          reverse={true}
        />

        <ServiceCard
          title="Help to Implement Features"
          description="Struggling to add new features to your project? Our team of
            experienced developers is here to help. We'll work closely with
            you to understand your requirements and turn your ideas into
            reality. From conceptualization to implementation, we'll ensure
            that the new features meet your expectations and align with your
            project goals. Partner with us to bring your app to the next
            level."
          image={WE}
          reverse={false}
        />
      </div>
    </section>
  );
};

export default Offered;
