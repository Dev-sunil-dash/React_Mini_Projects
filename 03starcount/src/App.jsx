import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './App.css';

function StarRating({ noOfStars = 10 }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  function handleMouseOver(index) {
    setHoveredRating(index);
  }

  function handleMouseLeave() {
    setHoveredRating(rating);
  }

  function handleClick(index) {
    setRating(index);
  }

  return (
    <div className='star-rating'>
      {[...Array(noOfStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            className={starValue <= (hoveredRating || rating) ? 'active' : 'inActive'}
            onMouseOver={() => handleMouseOver(starValue)}
            onMouseLeave={() => handleMouseLeave()}
            onClick={() => handleClick(starValue)}
            size={40}
          />
        );
      })}
      <p>Selected rating: {rating}</p>
    </div>
  );
}

export default StarRating;
