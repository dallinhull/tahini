import React from "react";
import "../css/catOld.css";
import catOldImage from "../assets/cat-old.jpg"

const CatOld: React.FC = () => {
  return (
    <div className="old-section">
        <div className="old-left-container">
            <img src={catOldImage} alt="Greyscale picture of sitting cat" className="old-image" />
        </div>
        <div className="old-right-container">
            <div className="old-header">
                <h2>Seven Years and More</h2>
            </div>
            <div className="old-description">
                <p>
                Much like many living organisms, the body begins to deteriorate and experience a lot of changes. Cats at this age should eat less fats and calories and more quality proteins. This means when you are purchasing packaged foods for your cat, look for food that states a particular protein (such as "salmon") and not just a category (such as fish). This usually means they are byproducts, or combinations, of lesser quality proteins.
                </p>
            </div>
        </div>
    </div>  
  );
};

export default CatOld;