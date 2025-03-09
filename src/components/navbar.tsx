import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import BalloonLogo from '../assets/balloon-dog.png';

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
          <Link to="/"><img src={BalloonLogo} alt="Logo" className="logo" /></Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
        </button>

        <div className={`nav-content ${isMenuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li className="nav-item dropdown">
              <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
              <ul className="dropdown-menu">
                <li><a href="/pet-project/#our-mission">Mission</a></li>
                <li><a href="/pet-project/#pexpert-section">Pexpert</a></li>
                <li><a href="/pet-project/#benefits">Benefits</a></li>
                <li><a href="/pet-project/#adopt">Adopt</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link to="/dogs" className={`nav-link ${location.pathname.startsWith('/dogs') ? 'active' : ''}`}>Dogs</Link>
              <ul className="dropdown-menu">
                <li><a href="/pet-project/dogs/#intro">Info</a></li>
                <li><a href="/pet-project/dogs/#diet-exercise">Diet & Exercise</a></li>
                <li><a href="/pet-project/dogs/#groom-handling">Grooming & Handling</a></li>
                <li><a href="/pet-project/dogs/#vaccinations-medications">Vaccinations & Medications</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link to="/cats" className={`nav-link ${location.pathname.startsWith('/cats') ? 'active' : ''}`}>Cats</Link>
              <ul className="dropdown-menu">
                <li><a href="/pet-project/cats/#info">Info</a></li>
                <li><a href="/pet-project/cats/#zero-to-four-weeks">Zero to Four Weeks</a></li>
                <li><a href="/pet-project/cats/#four-weeks-to-one-year">Four Weeks to One Year</a></li>
                <li><a href="/pet-project/cats/#one-year-to-seven-years">One Year to Seven Years</a></li>
                <li><a href="/pet-project/cats/#seven-years-and-older">Seven Years and Older</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link to="/birds" className={`nav-link ${location.pathname.startsWith('/birds') ? 'active' : ''}`}>Birds</Link>
              <ul className="dropdown-menu">
                <li><a href="/pet-project/birds/#info">Info</a></li>
                <li><a href="/pet-project/birds/#relational-needs">Relational Needs</a></li>
              </ul>
            </li>
          </ul>

          <div className="cta-container">
            <Link to="/pexpert" className="consult-button">Consult A Pexpert Today!</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
