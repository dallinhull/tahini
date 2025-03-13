import React from "react";
import "../css/cuisineGrocery.css";
import cleanImage from "../assets/grocery.jpg"

const DogGroom: React.FC = () => {
  return (
    <div className="cuisine-grocery">
        <div className="groom-left-container">
            <img src={cleanImage} alt="Dog in Bath Image" className="groom-image" />
        </div>
        <div className="groom-right-container">
            <div className="groom-header">
                <h2>Local Grocers</h2>
            </div>
            <div className="groom-description">
                <p>
                Taniti has two supermarkets, two smaller grocery stores, and one convenience store that is open 24 hours a day.</p>
            </div>
        </div>
    </div>  
  );
};

export default DogGroom;