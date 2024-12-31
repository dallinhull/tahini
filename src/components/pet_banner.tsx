import React from "react";
import "../css/PetBanner.css";

const PetBanner: React.FC = () => {
  return (
    <div className="pet-banner">
      <div className="home-banner-content">
        <h1 className="banner-heading">Pets are nature's gift to humanity</h1>
        <a href="/pexpert" className="consult-button">
          Consult a Pet Expert
        </a>
      </div>
    </div>
  );
};

export default PetBanner;