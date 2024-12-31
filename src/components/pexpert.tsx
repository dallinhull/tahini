import React from "react";
import "../css/pexpert.css";
import vetImage from "../assets/vet.jpg"

const PexpertSection: React.FC = () => {
  return (
    <div className="pexpert-section">
      <div className="pexpert-left-container">
        <div className="pexpert-header">
          <h2>Our Pexperts</h2>
        </div>
        <div className="pexpert-description">
          <p>
            Our pet experts—or "Pexperts"—have been working with pet owners and
            professionals alike for the past twelve years. They offer one-on-one
            consultations with current and prospective pet owners as well as group
            presentations designed for veterinary, pet shelter, and pet breeding
            professionals.
          </p>
        </div>
        <div className="home-pexpert-button-container">
          <a href="/pexpert" className="pexpert-button">
            Talk to a Pexpert!
          </a>
        </div>
      </div>
      <div className="pexpert-right-container">
        <img src={vetImage} alt="Pexpert Image" className="pexpert-image" />
      </div>
      </div>  
  );
};

export default PexpertSection;
