import React from "react";
import "../css/catBanner.css";

const CatBanner: React.FC = () => {
  return (
    <div className="cat-banner">
        <div className="cat-banner-content">
            <h1 className="cat-banner-heading">Find your purrrfect companion</h1>
            <a href="/pexpert" className="consult-button">
            Consult a Pet Expert
            </a>
        </div>
    </div>
  );
};

export default CatBanner;