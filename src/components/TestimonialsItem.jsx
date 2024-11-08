import React from 'react';

const TestimonialsItem = ({ item, quotesIcon }) => {
  return (
    <div className="review-card">
      <img src={quotesIcon} alt="Quotes Icon" className="quotes-icon" />
      <div className="stars">
        {'★'.repeat(item.starRating)}{'☆'.repeat(5 - item.starRating)}
      </div>
      <p className="comment">{item.comment}</p>
      <div className="user-info">
        <img src={item.avatarUrl} alt={`${item.author}'s avatar`} className="avatar" />
        <div className="user-details">
          <p className="author">{item.author}</p>
          <p className="job-role">{item.jobRole}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsItem;
