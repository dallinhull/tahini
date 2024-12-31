import React from "react";
import "../css/dogGroom.css";
import cleanImage from "../assets/dog-bath.jpg"

const DogGroom: React.FC = () => {
  return (
    <div className="groom-section">
        <div className="groom-left-container">
            <img src={cleanImage} alt="Dog in Bath Image" className="groom-image" />
        </div>
        <div className="groom-right-container">
            <div className="groom-header">
                <h2>Grooming & Handling</h2>
            </div>
            <div className="groom-description">
                <p>
                Keeping your furry family member clean is important to its health. So be sure to <b>brush frequently</b> to reduce the amount of shedding and prevent matted and tangled fur that can prove to be extremely difficult to remove. <b>Check for insects such as ticks and fleas</b>, especially after visiting heavily wooded areas. Bathing is not only important to your dog’s health but can be an exercise depending on how strong willed the dog is. <b>Rinse all of the soap out</b>, as any residual soap can result in a rash. Be sure the soap is formulated for your puppy or dog, since <b>harsh soaps can cause allergic reactions</b>.</p>
                <br />
                
                <p>
                And as always, <b>be careful how you handle your loved one</b>. No matter the size of your dog, you need to be cautious as you carry your canine. If you have a small dog, then cradle the pup with one hand under the chest and the forearm supporting the back half. If it is a large dog, reach under the belly with both your arms perpendicular to the dog, and use each arm to support the chest and rear as you lift.
                </p>
            </div>
        </div>
    </div>  
  );
};

export default DogGroom;