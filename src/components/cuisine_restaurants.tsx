import React from "react";
import "../css/cuisineRestaurants.css";
import hikingImage from "../assets/fish-rice.jpg"

const CuisineRestaurants: React.FC = () => {
  return (
    <div className="cuisine-restaurants">
      <div className="diet-left-container">
        <div className="diet-header">
          <h2>Restaurants</h2>
        </div>
        <div className="diet-description">
          <p>
          Taniti currently has 10 restaurants: five serve mostly local fish and rice, three serve American-style meals, and two serve Pan-Asian cuisine.
          </p>
        </div>
      </div>
      <div className="diet-right-container">
        <img src={hikingImage} alt="Dog and Owner Hiking" className="diet-image" />
      </div>
      </div>  
  );
};

export default CuisineRestaurants;
