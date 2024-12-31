import React from "react";
import "../css/health.css";
import lifestyleImage from "../assets/lifestyle_cat.jpg"

const HealthSection: React.FC = () => {
  return (
    <div className="health-section">
        <div className="health-left-container">
            <img src={lifestyleImage} alt="Lifestyle Image" className="health-image" />
        </div>
        <div className="health-right-container">
            <div className="health-header">
                <h2>Did You Know That?</h2>
            </div>
            <div className="health-description">
                <p>
                It has been scientifically proven that opening our homes and hearts to a pet increases our longevity and improves our overall quality of life as well as the lives of our pets.
                </p>
                <br />
                
                <p>
                Looking for basic pet care advice for the most common type of pets? Need additional help determining which type of pet is right for you and your family? We will work with you and provide tailored evidence-based pet care to ensure lifelong health and wellness of your new companion.
                </p>
            </div>
            <div className="health-button-container">
                <a href="/pexpert" className="health-button">
                Take Your First Step
                </a>
            </div>
        </div>
    </div>  
  );
};

export default HealthSection;