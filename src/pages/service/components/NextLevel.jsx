import { Link } from "react-router-dom";
import styles from "./NextLevel.module.css";

export default function NextLevel() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Take your business to
          <br />
          the next level.
        </h1>
        <p className={styles.description}>
          Get more insights and reports for your startup and improve the
          <br />
          customer relationships.
        </p>
        <Link className={styles.cta} to="/contact" >Get started →</Link>
      </div>
    </section>
  );
}
