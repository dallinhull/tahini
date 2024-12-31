import React from "react";
import "../css/catOne.css";
import catOneImage from "../assets/cat-one.jpg"

const CatOne: React.FC = () => {
  return (
    <div className="one-section">
        <div className="one-left-container">
            <img src={catOneImage} alt="Cat one year old image" className="one-image" />
        </div>
        <div className="one-right-container">
            <div className="one-header">
                <h2>Four Weeks to One Year</h2>
            </div>
            <div className="one-description">
                <p>
                Kittens can start being introduced to soft wet kitten food typically around three to four weeks after birth. According to the ASPCA, kittens at this age should eat half to one cup of dry kitten food or six to nine ounces of wet kitten food per day. If your kitten has difficulties eating hard food, a small amount of water can be added to soften the food. Cat food that is optimized for kittens provides the additional nutrients that are needed for growth, energy, and wellness. Depending on the breed, your cat may have different dietary requirements. You should always consult with your veterinarian for recommendations.
                </p>
            </div>
        </div>
    </div>  
  );
};

export default CatOne;