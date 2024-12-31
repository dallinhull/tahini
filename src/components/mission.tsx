import React from "react";
import "../css/mission.css";

const MissionSection: React.FC = () => {
  return (
    <div className="mission-section">
      <div className="mission-header">
        <h2>Our Mission</h2>
      </div>
      <div className="mission-content">
        <p>
          "At Pet Paradigm Professionals, our mission is to offer resources to
          help you care for your furry, scaly, feathery, and slimy loved ones."
        </p>
      </div>
    </div>
  );
};

export default MissionSection;
