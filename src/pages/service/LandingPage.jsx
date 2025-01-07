import styles from "./LandingPage.module.css";
import StatsCard from "./components/StatsCard";
import ServiceCard from "./components/ServiceCard";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <StatsCard label="ROAS" value="6.91k" position="left" />
      <StatsCard label="REV" value="$1.2M" position="right" />

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
          <button className={styles.cta}>Contact Us →</button>
        </div>

        <div className={styles.services}>
          <ServiceCard
            icon="search"
            title="Paid Search"
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
