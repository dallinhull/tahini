import React from "react";
import "../css/dogBanner.css";

const DogBanner: React.FC = () => {
  return (
    <div className="dog-banner">
      <div className="banner-content-one"></div>
        <div className="banner-content-two">
            <h1 className="banner-heading">Discover your new adventure partner</h1>
            <a href="/pexpert" className="consult-button">
            Consult a Pet Expert
            </a>
        </div>
    </div>
  );
};

export default DogBanner;