import React from "react";
import "../css/homeBanner.css";

const HomeBanner: React.FC = () => {
  return (
    <div className="home-banner">
      <div className="home-banner-content">
        <h1 className="banner-heading">Welcome to Tahini</h1>
      </div>
    </div>
  );
};

export default HomeBanner;