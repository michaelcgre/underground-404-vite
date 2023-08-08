import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const StarRating = ({ blogId, onRatingChange }) => {
  // State for holding the current rating and hover value
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  // Load the rating from local storage based on blogId
  useEffect(() => {
    const storedRating = localStorage.getItem(`rating-${blogId}`);
    if (storedRating !== null) {
      setRating(Number(storedRating));
    }
  }, [blogId]);

  // Handler function for setting the rating and saving it to local storage
  const handleRating = (value) => {
    setRating(value);
    localStorage.setItem(`rating-${blogId}`, value);
    if (onRatingChange) onRatingChange(value);
  };

  return (
    <div>
      {/* Iterate over 5 stars, render each star with appropriate styles and behaviors */}
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            {/* Hidden radio input to manage the selection state */}
            <input
              type="radio"
              name={`rating-${blogId}`}
              value={ratingValue}
              style={{ display: "none" }}
              onClick={() => handleRating(ratingValue)}
            />
            {/* Star icon that changes color based on hover or rating value */}
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
