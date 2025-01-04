import React from "react";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.content}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.title}>404</h1>
            <div className={styles.messageOverlay}>
              <p className={styles.message}>
                This is not the web page you are looking for
              </p>
            </div>
          </div>
          <div className={styles.description}>
            <p>
              It seems you've wandered into the desert of lost pages. Let's get
              you back to safety.
            </p>
          </div>
          <a href="/" className={styles.button}>
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
