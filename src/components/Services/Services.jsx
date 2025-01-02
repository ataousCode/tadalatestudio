import React from 'react';
import { FaMobile, FaPencilRuler, FaGlobe, FaCloud } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaMobile />,
      title: 'Mobile App Development',
      description: 'We build scalable mobile apps designed to evolve alongside your business, ensuring they adapt to your growing needs.'
    },
    {
      icon: <FaPencilRuler />,
      title: 'UI/UX Design',
      description: 'We deliver custom UI/UX solutions that reflect your brands unique identity, ensuring a seamless and cohesive user experience aligned with your vision.'
    },
    {
      icon: <FaGlobe />,
      title: 'Web App Development',
      description: 'We create dynamic websites and web apps that blend creativity and functionality, elevating your online presence with user-friendly experiences.'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Backend Development',
      description: 'We design secure and reliable cloud backends that effortlessly manage your data, ensuring robust protection and seamless integration with your applications.'
    }
  ];

  return (
    <section className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="subtitle">
          We focus on developing high-quality mobile apps and websites. Our strength lies in
          combining stylish designs with powerful backend features, ensuring that your applications
          are both user-friendly and reliable.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

