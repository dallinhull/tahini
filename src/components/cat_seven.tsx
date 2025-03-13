import React from "react";
import "../css/catSeven.css";
import CatSevenImage from "../assets/scuba.jpg"

const CatSeven: React.FC = () => {
  return (
    <div className="seven-section">
      <div className="seven-left-container">
        <div className="seven-header">
          <h2>Sightseeing</h2>
        </div>
        <div className="seven-description">
          <p>
          Most tourists spend most of their time in Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay. Other popular activities include boat or bus tours of the island, hikes in the rainforest, or visits to Taniti’s active volcano.</p>
        </div>
      </div>
      <div className="seven-right-container">
        <img src={CatSevenImage} alt="adult cat image" className="seven-image" />
      </div>
      </div>  
  );
};

export default CatSeven;
