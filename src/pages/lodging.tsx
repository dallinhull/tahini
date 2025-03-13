import React from 'react';
import Navbar from '../components/navbar';
import LodgingBanner from '../components/lodging_banner';
import LodgingInfo from '../components/lodging_info';
import Footer from '../components/footer';
import Head from '../components/head';

const Cuisine: React.FC = () => {
  return (
    <div>
        <Head />
        <Navbar />
        <LodgingBanner />
        <div id='lodging-info'>
        <LodgingInfo />
        </div>
        <Footer />
    </div>
  );
};

export default Cuisine;
