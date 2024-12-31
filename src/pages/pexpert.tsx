import React from 'react';
import Navbar from '../components/navbar';
import PexpertBanner from '../components/pexpert_banner';
import PetForm from '../components/pexpert_form';
import Footer from '../components/footer';



const Pexpert: React.FC = () => {
  return (
    <div>
        <Navbar />
        <PexpertBanner />
        <PetForm />
        <Footer />


    </div>
  );
};

export default Pexpert;