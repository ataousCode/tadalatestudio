
import styles from "./WhyChooseUs.module.css";
import { FaAndroid, FaApple } from "react-icons/fa";
import WE from "../../Images/we.png";
import { Link } from "react-router-dom";
import ContactButton from "../../pages/Contact/components/ContactButton";

const WhyChooseUs = () => {
  const features = [
    "Comprehensive App Solutions Across Platforms",
    "Custom Development to Meet Your Unique Requirements",
    "Focus on Security and Performance",
    "Timely Delivery, Every Time",
    "Risk Management and Ongoing Support",
  ];

  return (
    <section className={styles.container}>
      <div className={styles.textSection}>
        <h1>Why Trust TadalateStudio for App Development</h1>
        <p>
          TadalateStudio is your partner in building cutting-edge apps across
          platforms. Whether you need mobile, web, or custom enterprise
          solutions, we offer innovative, secure, and scalable development that
          drives business growth. Our commitment to delivering high-quality
          results makes us the trusted choice for top brands.
        </p>
        <ul className={styles.features}>
          {features.map((feature, index) => (
            <li key={index}>
              <span className={styles.icon}>✓</span>
              {feature}
            </li>
          ))}
        </ul>
        {/* <button className={styles.ctaButton}>
          <Link className={styles.ctaButton} to='/contact'>GET IN TOUCH</Link>
        </button> */}
        <ContactButton text="GET IN TOUCH" />
      </div>
      <div className={styles.imageSection}>
        <div className={styles.icons}>
          <FaAndroid className={styles.androidIcon} />
          <FaApple className={styles.appleIcon} />
        </div>
        <img
          src={WE}
          alt="Professional at work"
          className={styles.professionalImage}
        />
      </div>
    </section>
  );
};

export default WhyChooseUs;
