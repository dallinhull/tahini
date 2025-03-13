import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import "./app.css";
import Home from './pages/home'; 
import Cuisine from './pages/cuisine.tsx';
import Lodging from './pages/lodging.tsx';
import Sights from './pages/sights.tsx';
import Transportation from './pages/transportation.tsx';
import FAQ from './pages/faq.tsx';
import './css/navbar.css';


const App: React.FC = () => {
  return (
    <Router basename = "/tahini">
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cuisine" element={<Cuisine />} />
          <Route path="/lodging" element={<Lodging />} />
          <Route path="/sights" element={<Sights />} />
          <Route path="/transportation" element={<Transportation />} />
          <Route path="/faq" element={<FAQ />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;

