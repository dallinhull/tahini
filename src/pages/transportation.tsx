import React from 'react';
import Navbar from '../components/navbar';
import BirdBanner from '../components/bird_banner';
import BirdRelationship from '../components/bird_relationship';
import BirdGround from '../components/bird_ground';
import Footer from '../components/footer';
import Head from '../components/head';



const Transportation: React.FC = () => {
  return (
    <div>
        <Head />
        <Navbar />
        <BirdBanner />
        <BirdRelationship />
        <BirdGround />
        <Footer />
    </div>
  );
};

export default Transportation;