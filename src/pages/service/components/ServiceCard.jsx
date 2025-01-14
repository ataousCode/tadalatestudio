/* eslint-disable react/prop-types */
import { Search, BarChart2, Share2 } from "lucide-react";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({ title, description, icon }) {
  const icons = {
    search: <Search className={styles.icon} />,
    analytics: <BarChart2 className={styles.icon} />,
    social: <Share2 className={styles.icon} />,
  };

  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{icons[icon]}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <a href="/contact" className={styles.link}>
        Learn more →
      </a>
    </div>
  );
}
