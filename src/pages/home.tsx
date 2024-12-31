// src/App.tsx
import React from 'react';
import Navbar from '../components/navbar'; // Import the Navbar component
import PetBanner from '../components/pet_banner.tsx';
import MissionSection from '../components/mission';
import PexpertSection from '../components/pexpert';
import HealthSection from '../components/health';
import AdoptionHelp from '../components/adopt';
import Footer from '../components/footer.tsx';
//import './App.css'; // Import any global styles if needed

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <PetBanner />
      <div id='our-mission'>
      <MissionSection />
      </div>
      <div id='pexpert-section'>
      <PexpertSection />
      </div>
      <div id='benefits'>
      <HealthSection />
      </div>
      <div id='adopt'>
      <AdoptionHelp />
      </div>
      <Footer />
    </>
  );
};

export default Home;