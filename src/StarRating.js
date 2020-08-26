import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const[rating, Rating] = useState(null);
  return(
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input 
              type="radio" 
              name="rating" 
              value={ratingValue} 
              onClick={() => Rating(ratingValue)}
            />
            <FaStar 
            className="star" 
            color={ratingValue <= rating ? "#DB0A0A" : "#555252" }
            size={100}
            />  
           </label>
           
        );  
        })}
    </div>
 );
};

export default StarRating;