import React, { useState } from 'react';
import { Star } from 'lucide-react';

const FeedbackRating = () => {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);

  const handleClickStar = (index) => {
    setRating(index);
  };

  return (
    <div className="flex items-center justify-center p-4">
      {stars.map((star, index) => (
        <Star
          key={star}
          size={32}
          className={`cursor-pointer transition-colors ${
            index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
          }`}
          onClick={() => handleClickStar(star)}
        />
      ))}
      <span className="ml-4 text-lg font-semibold">
        {rating > 0 ? `${rating} star${rating > 1 ? 's' : ''}` : 'No rating'}
      </span>
    </div>
  );
};

export default FeedbackRating;