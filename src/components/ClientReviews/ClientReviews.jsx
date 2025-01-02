import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import WE from "../../Images/atalib.jpg"; // Import the image
import "./ClientReviews.css";

const ClientReviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const reviews = [
    {
      text: "From the moment I began my journey with HeyFlutter, I've been nothing but impressed. Their team combines innovation, expertise, and a genuine commitment to achieving the desired outcomes for their clients. The app they've developed for us isn't just functional—it's a testament to their attention...",
      author: "Abdulwahab Kabani",
      position: "STRYD, Cofounder & CTO",
      avatar: WE, // Directly assign the imported image
    },
    {
      text: "HeyFlutter has been an invaluable partner in our transition from ReactJS to Flutter. Not only did they readily adapt to our unique demands, but they consistently went above and beyond, pushing the boundaries of Flutter and providing expert advice every step of the way. Their dedication to excellence is evid...",
      author: "Chad Michael",
      position: "CEO - Enjoy Movies Your Way",
      avatar: WE, // Directly assign the imported image
    },
    {
      text: "In just 6 months launching 3 projects at the same time for the creation of the most advanced SAS platform for the management of padel academies, an app for 360% communication with customers and a modern website was a huge challenge, and it was possible thanks to HeyFlutter.com as an inv...",
      author: "Mikel L.",
      position: "CEO - Digcoach",
      avatar: WE, // Directly assign the imported image
    },
    {
      text: "I recently had the pleasure of working with HeyFlutter.com to develop my Chemtron E-Commerce App for Android and iOS phones. The engineers at HeyFlutter.com were technically proficient and responsive to my needs. They were able to overcome performance problems and implemen...",
      author: "Blake Young",
      position: "CEO - Chemtron",
      avatar: WE, // Directly assign the imported image
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