import { useState } from "react";
import styles from "./ContactPage.module.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.contactInfo}>
        <h1>Contact us</h1>
        <h2 className={styles.mainHeading}>Let's work together</h2>
        <p className={styles.subtitle}>We can not wait to hear from you.</p>

        <div className={styles.offices}>
          <h3>Our offices</h3>
          <p className={styles.officeDesc}>
            Prefer doing things in person? We don't but we have to list our
            addresses here for legal reasons.
          </p>

          <div className={styles.locations}>
            <div className={styles.location}>
              <h4>China</h4>
              <p>Sichuan / Mianyang</p>
              <p>Southwest Univsersity of Science and Technology</p>
            </div>

            <div className={styles.location}>
              <h4>Mali</h4>
              <p>Bamako</p>
              <p>Downtown, Bacodjikoroni Golf</p>
            </div>
          </div>

          <div className={styles.emailSection}>
            <h3>Email us</h3>
            <div className={styles.emailLinks}>
              <div>
                <h4>Careers</h4>
                <a href="mailto:tadalatestudio@gmail.com">tadalatestudio@gmail.com</a>
              </div>
              <div>
                <h4>Press</h4>
                <a href="mailto:atalibcodinglevel@gmail.com">atalibcodinglevel@gmail.com</a>
              </div>
            </div>
          </div>

          <div className={styles.social}>
            <h3>Follow us</h3>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="YouTube">
                WhatsApp
              </a>
              <a href="#" aria-label="GitHub">
                GitHub
              </a>
              <a href="#" aria-label="Facebook">
                Instagram
              </a>
              <a href="#" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href="#" aria-label="Twitter">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <h3>Work inquiries</h3>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formGroup}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company"
            />
          </div>

          <div className={styles.formGroup}>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone"
            />
          </div>

          <div className={styles.formGroup}>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows="4"
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
