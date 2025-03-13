import React from "react";
import "../css/faqQuestions.css";

const FaqQuestions: React.FC = () => {
  return (
    <div className="mission-section">
      <div className="mission-header">
        <h2>What kind of power outlets are used on the island?</h2>
      </div>
      <div className="mission-content">
        <p>
        Power outlets are 120 volts (the same as in the United States). 
        </p>
      </div>
      <div className="mission-header">
        <h2>Is alcohol served all day?</h2>
      </div>
      <div className="mission-content">
        <p>
        Alcohol is not allowed to be served or sold between the hours of midnight and 9:00 a.m. 
        </p>
      </div>
      <div className="mission-header">
        <h2>What is the legal drinking age?</h2>
      </div>
      <div className="mission-content">
        <p>
        The drinking age on Taniti is 18 and the drinking age is not strictly enforced.        </p>
      </div>
      <div className="mission-header">
        <h2>What if I only speak English?</h2>
      </div>
      <div className="mission-content">
        <p>
        Many younger Tanitians speak fluent English. Very little English is spoken in rural areas, especially by the older residents.        </p>
      </div>
      <div className="mission-header">
        <h2>Is there a hospital on the island?</h2>
      </div>
      <div className="mission-content">
        <p>
        There is one hospital and several clinics. The hospital has many multilingual employees.
        </p>
      </div>
      <div className="mission-header">
        <h2>Which crimes are common?</h2>
      </div>
      <div className="mission-content">
        <p>
        Violent crime is very rare on Taniti, but as tourism increases, there are more reports of pickpocketing and other petty crimes.         </p>
      </div>
      <div className="mission-header">
        <h2>Do businesses close on holidays?</h2>
      </div>
      <div className="mission-content">
        <p>
        Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays, so visitors should plan accordingly.        </p>
      </div>
      <div className="mission-header">
        <h2>Which currency is accepted?</h2>
      </div>
      <div className="mission-content">
        <p>
        Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. Several banks facilitate currency exchange, and many businesses accept major credit cards.
        </p>
      </div>
    </div>
  );
};

export default FaqQuestions;
