import { FaLightbulb, FaPencilRuler, FaCode, FaRocket, FaHeadset } from 'react-icons/fa';
import './DevelopmentProcess.css';

const DevelopmentProcess = () => {
  const steps = [
    {
      icon: <FaLightbulb />,
      title: 'Discovery',
      description: 'Outline your application requirements in detail'
    },
    {
      icon: <FaPencilRuler />,
      title: 'Design',
      description: 'Your app UI/UX starts taking shape'
    },
    {
      icon: <FaCode />,
      title: 'Development',
      description: 'Receive builds of your application for feedback'
    },
    {
      icon: <FaRocket />,
      title: 'Deployment',
      description: 'Launch internally or on app stores'
    },
    {
      icon: <FaHeadset />,
      title: 'Post-Launch Support',
      description: 'Updates & improvements'
    }
  ];

  return (
    <section className="development-process">
      <div className="container">
        <h2>Our Development Process</h2>
        <div className="timeline">
          {steps.map((step, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">
                {step.icon}
                <div className="timeline-number">{index + 1}</div>
              </div>
              <div className="timeline-content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;

