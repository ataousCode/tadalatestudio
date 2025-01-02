import React, { useState } from "react";
import {
  FaYoutube,
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import styles from "./ContactPage.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          budget: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
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

  return (
    <div className={styles.contactPage}>
      <div className={styles.container}>
        {/* <span className={styles.label}>Contact us</span> */}
        <h1 className={styles.title}>Let's work together</h1>
        <p className={styles.subtitle}>We can not wait to hear from you.</p>

        <div className={styles.content}>
          {/* Info Section */}
          <div className={styles.infoSection}>
            {/* Our Offices Section */}
            <div className={styles.offices}>
              <h2>Our offices</h2>
              <p className={styles.officeDesc}>
                Prefer doing things in person? We don't but we have to list our
                addresses here for legal reasons.
              </p>

              <div className={styles.locations}>
                <div className={styles.location}>
                  <h3>U.S.A</h3>
                  <p>on bay mark</p>
                  <p>Newtown city of Las Vegas</p>
                </div>
                <div className={styles.location}>
                  <h3>London</h3>
                  <p>13 long Street</p>
                  <p>Downtown, Allyway</p>
                </div>
              </div>
            </div>

            {/* <hr className={styles.divider} /> */}

            {/* Email Us Section */}
            <div className={styles.emailSection}>
              <h2>Email us</h2>
              <div className={styles.emailLinks}>
                <div>
                  <h3>Careers</h3>
                  <a href="mailto:reactjsbd.com">reactjsbd.com</a>
                </div>
                <div>
                  <h3>Press</h3>
                  <a href="mailto:noorjsdivs@gmail.com">noorjsdivs@gmail.com</a>
                </div>
              </div>
            </div>

            {/* <hr className={styles.divider} /> */}

            {/* Follow Us Section */}
            <div className={styles.followSection}>
              <h2>Follow us</h2>
              <div className={styles.socialLinks}>
                <a href="#" aria-label="YouTube">
                  <FaYoutube />
                </a>
                <a href="#" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="#" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="#" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className={styles.formSection}>
            <h2>Work inquiries</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? styles.error : ""}
                />
                {errors.name && (
                  <span className={styles.errorMessage}>{errors.name}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? styles.error : ""}
                />
                {errors.email && (
                  <span className={styles.errorMessage}>{errors.email}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  className={errors.company ? styles.error : ""}
                />
                {errors.company && (
                  <span className={styles.errorMessage}>{errors.company}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? styles.error : ""}
                />
                {errors.phone && (
                  <span className={styles.errorMessage}>{errors.phone}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? styles.error : ""}
                  rows={4}
                />
                {errors.message && (
                  <span className={styles.errorMessage}>{errors.message}</span>
                )}
              </div>

              {/* <div className={styles.formGroup}>
                <label className={styles.budgetLabel}>Budget</label>
                <div className={styles.budgetOptions}>
                  <label className={styles.budgetOption}>
                    <input
                      type="radio"
                      name="budget"
                      value="25-50k"
                      checked={formData.budget === "25-50k"}
                      onChange={handleChange}
                    />
                    <span>$25K – $50K</span>
                  </label>
                  <label className={styles.budgetOption}>
                    <input
                      type="radio"
                      name="budget"
                      value="50-100k"
                      checked={formData.budget === "50-100k"}
                      onChange={handleChange}
                    />
                    <span>$50K – $100K</span>
                  </label>
                </div>
              </div> */}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;