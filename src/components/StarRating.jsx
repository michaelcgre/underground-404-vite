import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const StarRating = ({ blogId, onRatingChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  // Load the rating from local storage based on blogId
  useEffect(() => {
    const storedRating = localStorage.getItem(`rating-${blogId}`);
    if (storedRating !== null) {
      setRating(Number(storedRating));
    }
  }, [blogId]);

  const handleRating = (value) => {
    setRating(value);
    localStorage.setItem(`rating-${blogId}`, value);
    if (onRatingChange) onRatingChange(value);
  };

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name={`rating-${blogId}`}
              value={ratingValue}
              style={{ display: "none" }}
              onClick={() => handleRating(ratingValue)}
            />
            <FontAwesomeIcon
              icon={faStar}
              style={{
                color: ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

StarRating.propTypes = {
  blogId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onRatingChange: PropTypes.func,
};

export default StarRating;
