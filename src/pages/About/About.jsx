import { FaCloud, FaCodeBranch } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import './About.css'
import QualityPillars from '../../components/QualityPillars/QualityPillars'
import MissionVision from '../../components/MissionVision/MissionVision'
import CompanyStats from '../../components/CompanyStats/CompanyStats'
import CoreValues from '../../components/CoreValues/CoreValues'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import SectionOne from './components/SectionOne'
import ContactForm from '../../components/SayHi/SayHi'
import TeamSection from './components/TeamSection/TeamSection'

const About = () => {
  const cards = [
    {
      icon: <MdWeb className='card-icon' />,
      title: 'Development',
      description:
        'We specialize in designing, developing, and scaling your app and website projects with unmatched expertise, delivering top-tier performance and innovative solutions tailored to your needs. From concept to execution, we ensure seamless functionality, stunning design, and exceptional user experiences that drive results and set your digital presence apart.',
    },
    {
      icon: <FaCloud className='card-icon' />,
      title: 'Cloud Computing',
      description:
        'Welcome to our Cloud Services, where we empower businesses to seamlessly transition to and thrive in the cloud. We provide end-to-end solutions tailored to help you harness the full potential of cloud technology—from migration and setup to optimization and ongoing management.',
      
    },
    {
      icon: <FaCodeBranch className='card-icon' />,
      title: 'Rest APIs & Database',
      description:
        'We specialize in crafting, developing, and scaling your REST APIs and database systems, offering exceptional expertise and delivering outstanding performance. From designing efficient, secure APIs to building robust, scalable databases, we ensure seamless integration and optimal functionality for your applications.',
      
    },
  ]

  return (
    <div className='about-page'>
      {/* <AboutHero /> */}
      <SectionOne />
      <div className='hero-section'>
        <div className='overlay'></div>
        <div className='cards-container'>
          {cards.map((card, index) => (
            <div key={index} className='info-card'>
              <div className='card-content'>
                {card.icon}
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                {/* <a href={card.buttonLink} className='cta-button'>
                  {card.buttonText}
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <QualityPillars />
      <MissionVision />
      <CompanyStats />
      <CoreValues />
      <WhyChooseUs />
      <TeamSection />
      <ContactForm />
    </div>
  )
}

export default About
