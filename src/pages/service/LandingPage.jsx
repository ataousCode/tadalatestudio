/* eslint-disable react/no-unescaped-entities */
import styles from "./LandingPage.module.css";
import { Link } from "react-router-dom";
import StatsCard from "./components/StatsCard";
import ServiceCard from "./components/ServiceCard";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <StatsCard label="WEB" value="6.91k" position="left" />
      <StatsCard label="MOBILE" value="8.22k" position="right" />

      <main className={styles.main}>
        <div className={styles.hero}>
          <span className={styles.subtitle}></span>
          <h1 className={styles.title}>
            Let's Build Your Online
            <br />
            Success Story
          </h1>
          <p className={styles.description}>
            We specialize in crafting data-driven digital campaigns
            <br />
            that captivate your audience.
          </p>
          <Link to="/contact" className={styles.cta}>Contact Us →</Link>
        </div>

        <div className={styles.services}>
          <ServiceCard
            icon="search"
            title="Web development"
            description="Maximize Visibility and Conversions with Precision-targeted Ads through Our Expert Paid Search Campaigns."
          />
          <ServiceCard
            icon="analytics"
            title="Analytics & Reporting"
            description="Gain Insights and Track Performance with Robust Analytics and Reporting."
          />
          <ServiceCard
            icon="social"
            title="Paid Social"
            description="Amplify Reach with Strategic Paid Social Media Advertising."
          />
        </div>
      </main>
    </div>
  );
}
