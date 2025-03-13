import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import TFlag from '../assets/T_Flag.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/"><img src={TFlag} alt="Logo" className="logo" /></Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <div className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li className="nav-item dropdown">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
            </li>

            <li className="nav-item dropdown">
              <Link to="/cuisine" className={`nav-link ${location.pathname.startsWith('/cuisine') ? 'active' : ''}`}>Cuisine</Link>
            </li>

            <li className="nav-item dropdown">
              <Link to="/lodging" className={`nav-link ${location.pathname.startsWith('/lodging') ? 'active' : ''}`}>Lodging</Link>
            </li>

            <li className="nav-item dropdown">
              <Link to="/sights" className={`nav-link ${location.pathname.startsWith('/sights') ? 'active' : ''}`}>Sights & Activities</Link>
            </li>

            <li className="nav-item dropdown">
              <Link to="/transportation" className={`nav-link ${location.pathname.startsWith('/transportation') ? 'active' : ''}`}>Getting Around</Link>
            </li>
          </ul>

          <div className="faq-container">
            <Link to="/faq" className="faq-button">FAQs</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
