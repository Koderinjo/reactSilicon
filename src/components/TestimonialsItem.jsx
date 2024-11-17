import PropTypes from "prop-types";

const TestimonialsItem = ({ item, quotesIcon }) => {
  return (
    <div className="review-card">
      <img src={quotesIcon} alt="Quotes Icon" className="quotes-icon" />
      <div className="stars">
        {"★".repeat(item.starRating)}
        {"☆".repeat(5 - item.starRating)}
      </div>
      <p className="comment">{item.comment}</p>
      <div className="user-info">
        <img
          src={item.avatarUrl}
          alt={`${item.author}'s avatar`}
          className="avatar"
        />
        <div className="user-details">
          <p className="author">{item.author}</p>
          <p className="job-role">{item.jobRole}</p>
        </div>
      </div>
    </div>
  );
};

TestimonialsItem.propTypes = {
  item: PropTypes.shape({
    starRating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    jobRole: PropTypes.string.isRequired,
  }).isRequired,
  quotesIcon: PropTypes.string.isRequired, // Changed to string
};

export default TestimonialsItem;
