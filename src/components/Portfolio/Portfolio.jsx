// PortfolioPage.jsx
import React from "react";
import styles from "./PortfolioPage.module.css";
import WE from "../../Images/pr.png";
import mobile from "../../Images/rw.png";
import TR from "../../Images/tr.png";
import { Link } from "react-router-dom";

const PortfolioPage = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Ayopark",
      description:
        "Maximize your car park's revenue potential with our innovative solutions, generating up to £50 profit share per paid parking charge.",
      image: WE, // Corrected: Directly assign the imported image
      buttonText: "View Case Study",
    },
    {
      id: 2,
      title: "RAISING LAZARUS",
      description:
        "To equip women and girls with the education and skills they need to lead independent and fulfilled lives, including training on safe and effective use of transportation tools.",
      image: mobile, // Corrected: Directly assign the imported image
      buttonText: "View Case Study",
    },
    {
      id: 3,
      title: "Train Booking Android & iOS",
      description:
        "The replicates the core functionality of a typical train booking app, from searching schedules to booking tickets, offering a seamless experience for users...",
      image: TR,
      buttonText: "View Case Study",
    },
  ];

  return (
    <div className={styles.portfolioPage}>
      <div className={styles.header}>
        <h1>We delivered many successful Products</h1>
        <p>Learn about the different apps and websites we have developed</p>
        <Link to="/portfolio">
          <button className={styles.portfolioButton}>SEE PORTFOLIO</button>
        </Link>
      </div>

      <div className={styles.carousel}>
        {portfolioItems.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.image} alt={item.title} className={styles.image} />
            <div className={styles.cardContent}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              {/* <button className={styles.portfolioButton}>
                {item.buttonText}
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
