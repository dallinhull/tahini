import React from "react";
import "../css/catKitten.css";
import kittenImage from "../assets/cat-kitten.jpg"

const CatKitten: React.FC = () => {
  return (
    <div className="kitten-section">
      <div className="kitten-left-container">
        <div className="kitten-header">
          <h2>Zero to Four Weeks</h2>
        </div>
        <div className="kitten-description">
          <p>
          It is important the queen (a term commonly used for a female cat that is either pregnant or nursing) directly nurse her young if possible. Monitor your kitten’s growth closely to make sure its growth rate is progressing steadily. If any kitten is not growing at a sufficient rate, a caretaker might need to feed the kitten directly either with a bottle or a feeding tube. 
          </p>
          <br></br>
          <br></br>
          <p>
          Some reasons why kittens might not gain weight appropriately include the following:
          <br></br>
          <br></br>
          <ul>
            <li>too many other siblings are competing for mom's milk</li>
            <li>gastrointestinal disease
            </li>
            <li>environmental conditions such as extreme heat or cold, or unsanitary conditions</li>
          </ul>
          </p>
        </div>
        <div className="kitten-pexpert-button-container">
          <a href="/pexpert" className="kitten-pexpert-button">
            Talk to a Pexpert!
          </a>
        </div>
      </div>
      <div className="kitten-right-container">
        <img src={kittenImage} alt="Kitten image" className="kitten-image" />
      </div>
      </div>  
  );
};

export default CatKitten;
