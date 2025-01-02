import React from "react";

import "./Services.css";
import ConsultingProcess from "../../components/ConsultingProcess/ConsultingProcess";
import GuidanceSection from "../../components/GuidanceSection/GuidanceSection";
import ConsultancyTypes from "../../components/ConsultancyTypes/ConsultancyTypes";
import ContactForm from "../../components/SayHi/SayHi";
import Offered from "./Offered/Offered";

const Services = () => {
  return (
    <div className="services-page">
      <div className="services-container">
        <section className="intro-section">
          <p className="highlight-text">
            Let's implement our Flutter expertise into your project
          </p>
          <h1>How does the consulting work?</h1>
        </section>
        <GuidanceSection />
        <ConsultingProcess />
        <ConsultancyTypes />
        <Offered />
        {/* <ConsultingProcess />
        <GuidanceSection />
        <ConsultancyTypes />
        <ServicesOffered /> */}
      </div>
      <ContactForm />
    </div>
  );
};

export default Services;
