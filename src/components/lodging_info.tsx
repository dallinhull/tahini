import React from "react";
import "../css/lodgingInfo.css";
import hikingImage from "../assets/hotel.jpg"

const Lodging: React.FC = () => {
  return (
    <div className="lodging-info">
      <div className="lodging-info-left-container">
        <div className="lodging-info-header">
          <h2>Lodging</h2>
        </div>
        <div className="lodging-info-description">
          <p>
          Taniti has a wide variety of lodging that ranges from an inexpensive hostel to one large, four-star resort. There are many small, family-owned hotels and a growing number of bed and breakfasts. All types of lodging are strictly regulated and regularly inspected by the Tanitian government.
          </p>
        </div>
      </div>
      <div className="lodging-info-right-container">
        <img src={hikingImage} alt="Dog and Owner Hiking" className="lodging-info-image" />
      </div>
      </div>  
  );
};

export default Lodging;
