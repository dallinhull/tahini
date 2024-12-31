import React from "react";
import "../css/birdBanner.css";

const BirdBanner: React.FC = () => {
  return (
    <div className="bird-banner">
        <div className="bird-banner-content">
            <h1 className="banner-heading">Take flight with your new feathered friend</h1>
            <a href="/pexpert" className="consult-button">
            Consult a Pet Expert
            </a>
        </div>
    </div>
  );
};

export default BirdBanner;