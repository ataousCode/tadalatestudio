import "./TechExpertise.css";

const TechExpertise = () => {
  const technologies = [
    {
      name: "Flutter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      color: "#027DFD",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      color: "#FFA000",
    },
    {
      name: "Amazon Web Services",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
      color: "#FF9900",
    },
    {
      name: "Google Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      color: "#4285F4",
    },
    {
      name: "Google Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original-wordmark.svg",
      color: "#4285F4",
    },
    {
      name: "Google Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      color: "#4285F4",
    },
    {
      name: "Google Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/goland/goland-original.svg",
      color: "#4285F4",
    },
    {
      name: "Google Cloud",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      color: "#4285F4",
    },
  ];

  return (
    <section className="tech-expertise">
      <div className="container">
        <h2>Our Tech Expertise</h2>
        <p className="subtitle">
          We leverage modern technologies to build cutting-edge web and mobile
          solutions for our clients.
        </p>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <img src={tech.logo} alt={tech.name} className="tech-logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechExpertise;
