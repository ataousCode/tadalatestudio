import styles from "./StatsCard.module.css";

export default function StatsCard({ label, value, position }) {
  return (
    <div className={`${styles.card} ${styles[position]}`}>
      <div className={styles.content}>
        <div className={styles.label}>{label}</div>
        <div className={styles.value}>{value}</div>
      </div>
    </div>
  );
}
