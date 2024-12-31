import React from "react";
import "../css/logos.css";

const Logos: React.FC = () => {
    return (
        <div className="logos-container">
            <a className="lettered-logo"></a>
            <a className="balloon-logo"  href="#home"></a>
        </div>
    );
};

export default Logos;