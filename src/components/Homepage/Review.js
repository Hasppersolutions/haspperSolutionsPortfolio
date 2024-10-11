import React from 'react';
import './Review.css';

const reviews = [
  {
    id: 1,
    logo: '/path-to-your/google-logo.png', // replace with actual path
    name: 'Google Reviews',
    stars: 4,
    description: '4/5 star for the work environment and learning opportunities provided.',
  },
  {
    id: 2,
    logo: '/path-to-your/goodfirms-logo.png', // replace with actual path
    name: 'GoodFirms',
    stars: 5,
    description: 'We made 5/5 star for quality, reliability, ability, and overall.',
  },
  {
    id: 3,
    logo: '/path-to-your/glassdoor-logo.png', // replace with actual path
    name: 'Glassdoor',
    stars: 3.9,
    description: 'We earned 3.9 stars, 94% recommended and 92% approval of CEO.',
  },
];

const Review = () => {
  const renderStars = (rating) => {
    const totalStars = 5;
    const filledStars = Math.floor(rating);
    const emptyStars = totalStars - filledStars;
    
    return (
      <>
        {Array(filledStars).fill().map((_, i) => (
          <span key={i} className="star filled">&#9733;</span>
        ))}
        {Array(emptyStars).fill().map((_, i) => (
          <span key={i} className="star">&#9734;</span>
        ))}
      </>
    );
  };

  return (
    <div className="reviews-container">
      <header className="reviews-header">
        <h2>Our Reviews</h2>
      </header>
      
      <div className="reviews-list">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.logo} alt={review.name} className="review-logo" />
            <div className="review-stars">
              {renderStars(review.stars)}
            </div>
            <p className="review-description">{review.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
