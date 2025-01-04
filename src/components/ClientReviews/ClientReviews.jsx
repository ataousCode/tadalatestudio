import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import WE from "../../Images/m.jpg";
import SAKU from "../../Images/saku.jpg";
import MARK from "../../Images/mark.jpg";
import USER from "../../Images/u.jpg";
import H from "../../Images/h.jpg";
import "./ClientReviews.css";

const ClientReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      text: "TadalateStudio exceeded our expectations with their web development services. Their team was professional, responsive, and delivered a sleek, user-friendly website tailored to our needs. They met deadlines and provided valuable insights throughout the process. Highly recommended for anyone seeking reliable and high-quality web development!",
      author: "Saku Bende T",
      position: "C.E.O Coffex Trading Pvt LTD-Zimbabwe",
      avatar: SAKU,
    },
    {
      text: "Travailler avec TadalateStudio a été une expérience incroyablement enrichissante. Son expertise en développement web et mobile a transformé nos idées en une application fluide et intuitive. Il a fait preuve d'une grande rigueur, d'une communication claire et d'une réactivité exceptionnelle. Grâce à lui, notre projet a été livré dans les délais et dépasse nos attentes. Nous recommandons vivement TadalateStudio à toute entreprise cherchant un professionnel talentueux et fiable !",
      author: "Mark Ag Alba",
      position: "Entrepreneur",
      avatar: MARK,
    },
    {
      text: "TadalateStudio did an excellent job developing our website! They were professional, attentive to our needs, and ensured the entire process was smooth and efficient. The final product exceeded our expectations—it’s user-friendly, visually stunning, and perfectly aligned with our vision. They were always available to answer our questions and made sure every detail was handled with care and amended based on request. We highly recommend TroiDev to anyone looking for a skilled and reliable web developer.",
      author: "Yealu Kogarl",
      position: "CEO - Raising-lazarus",
      avatar: H,
    },
    {
      text: "TadalateStudio est un développeur web et mobile hors pair. Son approche méthodique et sa créativité ont permis de créer une plateforme à la fois esthétique et fonctionnelle. Il a su comprendre nos besoins rapidement et proposer des solutions innovantes. Ce qui m'a le plus impressionné, c'est sa capacité à résoudre des problèmes techniques complexes avec une grande efficacité. Je le recommande sans hésitation pour tout projet digital ",
      author: "Muhammed Ag Alhassane",
      position: "CEO - Tahidjaret",
      avatar: WE,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 2 >= reviews.length ? 0 : prev + 2));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 2 < 0 ? reviews.length - 2 : prev - 2));
  };

  return (
    <section className="client-reviews">
      <div className="container">
        <h2>Client Reviews</h2>
        <div className="reviews-container">
          <button className="nav-button prev" onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <div className="reviews-grid">
            {reviews
              .slice(currentSlide, currentSlide + 2)
              .map((review, index) => (
                <div key={index} className="review-card">
                  <p className="review-text">
                    "{review.text}"<span className="show-more">show more</span>
                  </p>
                  <div className="review-author">
                    <img
                      src={review.avatar} // Use the avatar directly
                      alt={review.author}
                      className="author-avatar"
                    />
                    <div className="author-info">
                      <h4>{review.author}</h4>
                      <p>{review.position}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <button className="nav-button next" onClick={nextSlide}>
            <FaChevronRight />
          </button>
        </div>
        <div className="pagination">
          {Array.from({ length: reviews.length / 2 }).map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${
                currentSlide === index * 2 ? "active" : ""
              }`}
              onClick={() => setCurrentSlide(index * 2)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
