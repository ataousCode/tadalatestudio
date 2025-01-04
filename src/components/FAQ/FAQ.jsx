import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "Will you sign an NDA with me to keep my app idea confidential?",
      answer:
        "Yes, we are happy to sign an NDA before discussing your project details. We take your intellectual property very seriously and ensure complete confidentiality.",
    },
    {
      question: "How much does mobile or web app development cost?",
      answer:
        "The cost varies depending on your project requirements, complexity, and features. We provide detailed quotes after understanding your specific needs during the initial consultation.",
    },
    {
      question: "Do I have ownership over the source code of my app?",
      answer:
        "Yes, you receive full ownership of your applications source code upon project completion and final payment.",
    },
    {
      question: "How long does app development take?",
      answer:
        "Development time varies based on project scope. Simple apps typically take 2-3 months, while complex applications may require 4-6 months or more.",
    },
    {
      question: "Will I be getting regular updates from you?",
      answer:
        "Yes, we provide weekly progress updates and maintain regular communication throughout the development process.",
    },
    {
      question:
        "Will TadalateStudio also provide support and maintenance services?",
      answer:
        "Yes, we offer ongoing support and maintenance services to ensure your application runs smoothly after launch.",
    },
    {
      question:
        "Will you assist me to upload my app to the PlayStore or AppStore?",
      answer:
        "Yes, we provide complete assistance with app store submissions and help you meet all requirements for both Google Play Store and Apple App Store.",
    },
    {
      question: "What are the benefits of outsourcing mobile app development?",
      answer:
        "Outsourcing provides access to expert developers, cost-effectiveness, faster development, and allows you to focus on your core business while we handle the technical aspects.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2>FAQs</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <FaChevronDown className="faq-icon" />
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
