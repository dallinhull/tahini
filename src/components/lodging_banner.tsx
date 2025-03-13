import React from "react";
import "../css/lodgingBanner.css";

const LodgingBanner: React.FC = () => {
  return (
    <div className="lodging-banner">
      <div className="lodging-banner-content-one"></div>
        <div className="lodging-banner-content-two">
            <h1 className="lodging-banner-heading">Come Stay With Us</h1>
        </div>
    </div>
  );
};

export default LodgingBanner;