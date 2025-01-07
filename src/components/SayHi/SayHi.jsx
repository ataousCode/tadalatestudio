import React, { useState } from "react";
import { FiSend, FiAlertCircle } from "react-icons/fi";
import ATALIB from "../../Images/atalib.jpg";
import styles from "./SayHi.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    projectDetails: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let newErrors = { ...errors };

    switch (name) {
      case "name":
        if (!value.trim()) {
          newErrors.name = "Please enter Name";
        } else if (value.trim().length < 3) {
          newErrors.name = "Name must be at least 3 characters";
        } else {
          delete newErrors.name;
        }
        break;
      case "email":
        if (!value.trim()) {
          newErrors.email = "Please enter Email";
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = "Please enter a valid email";
        } else {
          delete newErrors.email;
        }
        break;
      case "projectDetails":
        if (!value.trim()) {
          newErrors.projectDetails = "Please enter Project Details";
        } else {
          delete newErrors.projectDetails;
        }
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const touchedAll = {
      name: true,
      email: true,
      projectDetails: true,
    };
    setTouched(touchedAll);

    // Validate all fields
    Object.keys(touchedAll).forEach((key) => {
      validateField(key, formData[key]);
    });

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", formData);
      // Handle form submission
    }
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <h2>Want to discuss your idea?</h2>
          <p className={styles.introText}>
            Hi I am Atalib Ag from the TadalateStudio Team.
            <br />
            We are excited to hear about your project.
          </p>
          <div className={styles.profile}>
            <img
              src={ATALIB}
              alt="Almousleck"
              className={styles.profileImage}
            />
            <div className={styles.profileText}>
              <h3>Almousleck Atalib Ag</h3>
              <p>Drop us a line and we will connect you as soon as posi.</p>
            </div>
          </div>
        </div>

        <div className={styles.contactFormWrapper}>
          <div className={styles.formCard}>
            <h2>Let's Get Started</h2>
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name">Name</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.name ? styles.error : ""}
                    />
                    {errors.name && (
                      <div className={styles.errorIcon}>
                        <FiAlertCircle />
                      </div>
                    )}
                  </div>
                  {errors.name && (
                    <span className={styles.errorMessage}>{errors.name}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email</label>
                  <div className={styles.inputWrapper}>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={errors.email ? styles.error : ""}
                    />
                    {errors.email && (
                      <div className={styles.errorIcon}>
                        <FiAlertCircle />
                      </div>
                    )}
                  </div>
                  {errors.email && (
                    <span className={styles.errorMessage}>{errors.email}</span>
                  )}
                </div>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="budget">Service</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                >
                  <option value="">Please select your project!</option>
                  <option value="Mobile application">Mobile application</option>
                  <option value="Web application">Web application</option>
                  <option value="Cloud services">Cloud services</option>
                  <option value="Need help with project">
                    Need help with project
                  </option>
                </select>
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="projectDetails">
                  Tell us about your project
                </label>
                <div className={styles.inputWrapper}>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.projectDetails ? styles.error : ""}
                  />
                  {errors.projectDetails && (
                    <div className={styles.errorIcon}>
                      <FiAlertCircle />
                    </div>
                  )}
                </div>
                {errors.projectDetails && (
                  <span className={styles.errorMessage}>
                    {errors.projectDetails}
                  </span>
                )}
              </div>

              <button type="submit" className={styles.submitButton}>
                <FiSend /> Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
