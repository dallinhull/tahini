import React from 'react';
import Navbar from '../components/navbar';
import BirdBanner from '../components/bird_banner';
import BirdIntro from '../components/bird_intro';
import BirdRelationship from '../components/bird_relationship';
import Footer from '../components/footer';



const Birds: React.FC = () => {
  return (
    <div>
        <Navbar />
        <BirdBanner />
        <div id='info'>
        <BirdIntro />
        </div>
        <div id='relational-needs'>
        <BirdRelationship />
        </div>
        <Footer />
    </div>
  );
};

export default Birds;