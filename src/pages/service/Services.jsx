import "./Services.css";
import ConsultingProcess from "../../components/ConsultingProcess/ConsultingProcess";
import ConsultancyTypes from "../../components/ConsultancyTypes/ConsultancyTypes";
import ContactForm from "../../components/SayHi/SayHi";
import Offered from "./Offered/Offered";
import LandingPage from "./LandingPage";
import NextLevel from "./components/NextLevel";

const Services = () => {
  return (
    <div className="services-page">
      <LandingPage />
      <div className="services-container">
        {/* <GuidanceSection /> */}
        <ConsultingProcess />
        <ConsultancyTypes />
        <Offered />
      </div>
      <NextLevel />
      <ContactForm />
    </div>
  );
};

export default Services;
