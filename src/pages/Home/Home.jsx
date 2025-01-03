import React, { useState } from "react";
import { FiSend } from "react-icons/fi";
import styles from "./Home.module.css"; // Import the CSS module
import Services from "../../components/Services/Services";
import Portfolio from "../../components/Portfolio/Portfolio";
import ContactForm from "../../components/SayHi/SayHi";
import TechExpertise from "../../components/TechExpertise/TechExpertise";
import ClientReviews from "../../components/ClientReviews/ClientReviews";
import Community from "../../components/Community/Community";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "Please select your project",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter Name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Please enter Email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.projectDetails.trim()) {
      newErrors.projectDetails = "Please enter Project Details";
    }

    if (Object.keys(newErrors).length === 0) {
      // Submit form
      console.log("Form submitted:", formData);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className={styles.home}>
      <div className={styles.homeContainer}>
        <div className={styles.heroSection}>
          <h1>
            Web and <span className={styles.highlight}>Mobile App</span>
            <br />
            Development Company
          </h1>
          <p className={styles.subtitle}>
            We turn your ideas into impactful mobile apps & websites.
          </p>
          <p className={styles.description}>
            Build beautiful, high-performance apps and websites with our expert
            <br />
            team, delivering great results on any platform
          </p>

          <div className={styles.featuredSection}>
            <h2>Featured in:</h2>
            <div className={styles.featuredLogos}>
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                alt="Top Development Company"
                className={styles.featuredLogo}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
                alt="Clutch"
                className={styles.featuredLogo}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
                alt="GoodFirms"
                className={styles.featuredLogo}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg"
                alt="Upwork"
                className={styles.featuredLogo}
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg"
                alt="Development Company"
                className={styles.featuredLogo}
              />
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <div className={styles.formContainer}>
            <h2>Let's talk business</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? styles.error : ""}
                  />
                  {errors.name && (
                    <span className={styles.errorMessage}>{errors.name}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.error : ""}
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>{errors.email}</span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="budget">Budget</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="Mobile application">Mobile application</option>
                  <option value="I need a website">I need a website</option>
                  <option value="I need a cloud solution">
                  I need a cloud solution
                  </option>
                  <option value="I need help on my web/mobile app">I need help on my web/mobile app</option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="projectDetails">Project Details</label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className={errors.projectDetails ? styles.error : ""}
                />
                {errors.projectDetails && (
                  <span className={styles.errorMessage}>
                    {errors.projectDetails}
                  </span>
                )}
              </div>

              <button type="submit" className={styles.submitButton}>
                Send <FiSend />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Services />
      <ClientReviews />
      <Portfolio />
      <WhyChooseUs />
      <TechExpertise />
      <Community />
      <ContactForm />
    </div>
  );
};

export default Home;

{
  /* <DevelopmentProcess />
<Services />
<ClientReviews />
<Portfolio />
<WhyTrustUs />
<TechExpertise />
<Community />
<SayHi />
<FAQ /> */
}
