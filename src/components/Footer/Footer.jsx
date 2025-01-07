import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaWhatsappSquare,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wave}></div>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Company Info */}
          <div className={styles.companyInfo}>
            <h2 className={styles.logo}>TadateStudio</h2>
            <p className={styles.description}>
              DatalateStudio have much planned for the future, working with
              great clients and continued software development.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="YouTube">
                <FaWhatsappSquare />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube">
                <FaLinkedin />
              </a>
              <a href="#" aria-label="YouTube">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.quickLinks}>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/service">Services</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactInfo}>
            <h3>Contact us</h3>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <span>Email Address</span>
                <a href="mailto:tadalatestudio@gmail.com">tadalatestudio@gmail.com</a>
              </div>
              <div className={styles.contactItem}>
                <span>Phone:</span>
                <a href="tel:+86 190 2811 7508">+86 190 2811 7508</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            taladatestudio © 2025. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
