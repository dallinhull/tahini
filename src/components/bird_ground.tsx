import React from "react";
import "../css/birdGround.css";
import catOldImage from "../assets/bike.jpg"

const BirdGround: React.FC = () => {
  return (
    <div className="ground-section">
        <div className="ground-left-container">
            <img src={catOldImage} alt="Greyscale picture of sitting cat" className="ground-image" />
        </div>
        <div className="ground-right-container">
            <div className="ground-header">
                <h2>Ground Transportation</h2>
            </div>
            <div className="ground-description">
                <p>
                Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day. Private buses serve the rest of the island. Taxis are available in Taniti City, and rental cars can be rented from a local rental agency near the airport. Bikes and helmets are available to rent from several vendors (helmets are required by law). Taniti City is fairly flat and very walkable. Many tourists stay in the area surrounding Merriton Landing: this area is easy to explore on foot.
                </p>
            </div>
        </div>
    </div>  
  );
};

export default BirdGround;