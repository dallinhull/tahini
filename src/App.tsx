import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'; // Import necessary routing components
import "./app.css";
import Home from './pages/home';  // Import your Home component
import Dogs from './pages/dogs.tsx'; // Import your About component
import Cats from './pages/cats.tsx';
import Birds from './pages/birds.tsx';
import Pexpert from './pages/pexpert.tsx';
import './css/navbar.css';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Define the routes */}
          <Route path="/" element={<Home />} />
          <Route path="/dogs" element={<Dogs />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/birds" element={<Birds />} />
          <Route path="/pexpert" element={<Pexpert />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;

