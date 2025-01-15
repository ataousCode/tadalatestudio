/* eslint-disable react/prop-types */
import classes from './Offered.module.css'
import WE from '../../../Images/we.png' 
import DE from '../../../Images/de.jpg'
import MOBILE from '../../../Images/mobil.png'

const ServiceCard = ({ title, description, image, reverse }) => {
  return (
    <div className={`${classes.serviceCard} ${reverse ? classes.reverse : ''}`}>
      <div className={classes.serviceContent}>
        <img src={image} alt={title} className={classes.serviceImage} />
        <div className={classes.serviceInfo}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

const Offered = () => {
  return (
    <section className={classes.servicesOffered}>
      <h2>How do we help you and your team?</h2>
      <div className={classes.servicesGrid}>
        {/* First Card */}
        <ServiceCard
          title='Help to Implement Features'
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
          title='Analyze & Code Restructure'
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
          title='Feature Implementation Made Easy'
          description='Adding new features to your project doesn’t have to be a challenge. At TadalateStudio, we specialize in turning your ideas into reality. Our team of skilled developers works hand-in-hand with you to understand your goals, design innovative solutions, and implement features that elevate your app or website. Whether it’s enhancing functionality, improving user experience, or integrating cutting-edge technology, we’ve got you covered. Let us help you bring your vision to life and take your project to new heights.'
          image={DE}
          reverse={false}
        />
      </div>
    </section>
  )
}

export default Offered
