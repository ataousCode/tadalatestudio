import React from "react";
import "./ConsultancyTypes.css";
import ATALIB from "../../Images/one.jpg";
import TWO from "../../Images/two.jpg";

const ConsultancyTypes = () => {
  return (
    <section className="consultancy-types">
      <h2>Are you looking for consultancy?</h2>
      <div className="types-grid">
        <div className="type-card">
          <img src={ATALIB} alt="Individual developer working" />
          <h3>For Individuals</h3>
          <p>
            Do you have a project that you developed but need some help
            because you are sometimes stuck and don't know further? Are you a
            single developer and don't have all the expertise to finish your
            project? Our Consulting is tailored to help individuals like you!
          </p>
        </div>
        <div className="type-card">
          <img src={TWO} alt="Team collaboration" />
          <h3>For Companies</h3>
          <p>
            Is your team new to tech? Or does your team struggle to implement
            a clean project architecture and great project structure? If your
            team doesn't follow the best practices, creates spaghetti code and
            introduces bugs over and over again then let your team be guided by
            our Experts to bring success to your projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ConsultancyTypes;
