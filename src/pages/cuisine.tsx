import React from 'react';
import Navbar from '../components/navbar';
import CuisineBanner from '../components/cuisine_banner';
import CuisineRestaurants from '../components/cuisine_restaurants';
import CuisineGrocery from '../components/cuisine_grocery';
import Footer from '../components/footer';
import Head from '../components/head';

const Cuisine: React.FC = () => {
  return (
    <div>
        <Head />
        <Navbar />
        <CuisineBanner />
        <div id='cuisine-restaurants'>
        <CuisineRestaurants />
        </div>
        <div id='cuisine-grocery'>
        <CuisineGrocery />
        </div>
        <Footer />
    </div>
  );
};

export default Cuisine;
