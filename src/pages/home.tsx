import React from 'react';
import Head from '../components/head.tsx'
import Navbar from '../components/navbar';
import AboutSection from '../components/home_about';
import Footer from '../components/footer.tsx';
import HomeBanner from '../components/home_banner.tsx';


const Home: React.FC = () => {
  return (
    <>
      <Head />
      <Navbar />
      <HomeBanner />
      <div id='about'>
      <AboutSection />
      </div>
      <Footer />
    </>
  );
};

export default Home;