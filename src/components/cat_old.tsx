import React from "react";
import "../css/catOld.css";
import catOldImage from "../assets/dance.jpg"

const CatOld: React.FC = () => {
  return (
    <div className="old-section">
        <div className="old-left-container">
            <img src={catOldImage} alt="Greyscale picture of sitting cat" className="old-image" />
        </div>
        <div className="old-right-container">
            <div className="old-header">
                <h2>Entertainment</h2>
            </div>
            <div className="old-description">
                <p>
                Most people visit Taniti to enjoy the beaches, explore the rainforest, and to visit the volcano.</p>
                <br></br>
                <br></br>
                <p>However, there are other things to do, including visiting a local history museum, going on chartered fishing tours, snorkeling, zip-lining in the rainforest, visiting several pubs, including a microbrewery, dancing at a new dance club, seeing a movie, taking helicopter rides, playing at an arcade, visiting art galleries, and bowling. </p>
                <br></br>
                <br></br>    
                <p>Also, a nine-hole golf course should be operational by next year. Many of these activities are located in Merriton Landing, which is a rapidly developing area on the north side of Yellow Leaf Bay. 
                </p>
            </div>
        </div>
    </div>  
  );
};

export default CatOld;