import React from "react";
import "../css/catSeven.css";
import CatSevenImage from "../assets/cat-seven.jpg"

const CatSeven: React.FC = () => {
  return (
    <div className="seven-section">
      <div className="seven-left-container">
        <div className="seven-header">
          <h2>One Year to Seven Years</h2>
        </div>
        <div className="seven-description">
          <p>
          This age is when kittens reach the cat stage and do not need as many nutrients. At this age, their level of activity decreases, and so does their metabolism. It is not recommended to leave food out for the cats all day. Instead, provide food a couple times a day so they eat meals rather than snacking throughout the day. This practice reduces the risk of obesity and other weight-related feline ailments.
          </p>
        </div>
        <div className="seven-pexpert-button-container">
          <a href="/pexpert" className="seven-pexpert-button">
            Talk to a Pexpert!
          </a>
        </div>
      </div>
      <div className="seven-right-container">
        <img src={CatSevenImage} alt="adult cat image" className="seven-image" />
      </div>
      </div>  
  );
};

export default CatSeven;
