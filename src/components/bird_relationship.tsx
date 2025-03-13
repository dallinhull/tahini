import React from "react";
import "../css/birdRelationship.css";
import birdRelationshipImage from "../assets/cruise.jpg"

const BirdRelationship: React.FC = () => {
  return (
    <div className="relationship-section">
      <div className="relationship-left-container">
        <div className="relationship-header">
          <h2>Transportation</h2>
        </div>
        <div className="relationship-description">
          <p>
          Almost all visitors arrive to Taniti by air, though some arrive on a small cruise ship that docks in Yellow Leaf Bay for one night per week. Taniti is served by a small airport that can accommodate small jets and propeller planes. Taniti is in the process of expanding the airport so larger jets will be able to land on the island within the next few years. 
          </p>
        </div>
      </div>
      <div className="relationship-right-container">
        <img src={birdRelationshipImage} alt="Two perched parrots" className="relationship-image" />
      </div>
      </div>  
  );
};

export default BirdRelationship;
