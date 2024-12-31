import React from "react";
import "../css/dogDiet.css";
import hikingImage from "../assets/dog-hiking.jpg"

const DogDiet: React.FC = () => {
  return (
    <div className="diet-section">
      <div className="diet-left-container">
        <div className="diet-header">
          <h2>Diet & Exercise</h2>
        </div>
        <div className="diet-description">
          <p>
          Throughout dogs’ lifespans, they should generally be fed <b>fewer meals as they mature</b>. Puppies should be nursed the first two months, then introduced to three meals per day when they are about three to six months years old. Their food intake should be reduced to two meals per day when they are six months to one year old and finally reduced to one meal after they reach one year old. And <b>a dog’s typical body mass is composed of somewhere between 60 and 70 percent water</b>. The ASPCA says just a 10 percent decrease in body water can cause illness, and a 15 percent loss can cause death, <b>so make sure you keep your pooch hydrated!</b>
          </p>
          <p>
          Much like humans, <b>dogs need to have a healthy level of activity</b> to keep their organs healthy, <b>as well as sun and fresh air</b>. The minimum recommended time for exercise varies greatly with breed and size differences, but generally a range of <b>30–120 minutes of exercise is recommended per day</b>! Can you imagine exercising two hours per day? OK, I know that wouldn't bother some of you reading this. But the thought of it to me makes me cringe! And by the way, exercising your dog does not mean you are being challenged to a push-up contest. <b>Brisk walks are OK too!</b> You can also choose from a variety of toys to encourage physical activity; just be sure they are age appropriate and do not pose a choking hazard. Pay careful attention to toys that require supervision.  
          </p>
        </div>
        <div className="diet-pexpert-button-container">
          <a href="/pexpert" className="diet-pexpert-button">
            Talk to a Pexpert!
          </a>
        </div>
      </div>
      <div className="diet-right-container">
        <img src={hikingImage} alt="Dog and Owner Hiking" className="diet-image" />
      </div>
      </div>  
  );
};

export default DogDiet;
