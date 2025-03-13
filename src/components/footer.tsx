import React from 'react';
import '../css/footer.css';
import Flag from '../assets/T_Flag.png'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-logo">
          <img src={Flag} alt="Logo" />
        </div>

        <div className="footer-nav">
          <div className="footer-nav-item">
            <a href="/" className="footer-nav-link">Home</a>
          </div>

          <div className="footer-nav-item">
            <a href="/tahini/cuisine" className="footer-nav-link">Cuisine</a>
          </div>

          <div className="footer-nav-item">
            <a href="/tahini/lodging" className="footer-nav-link">Lodging</a>
          </div>

          <div className="footer-nav-item">
            <a href="/tahini/sights" className="footer-nav-link">Sights & Activities</a>
          </div>

          <div className="footer-nav-item">
            <a href="/tahini/transportation" className="footer-nav-link">Getting Around</a>
          </div>

          <div className="footer-nav-item">
            <a href="/tahini/faq" className="footer-nav-link">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
