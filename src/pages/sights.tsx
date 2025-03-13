import React from 'react';
import Navbar from '../components/navbar';
import CatBanner from '../components/cat_banner.tsx';
import CatSeven from '../components/cat_seven.tsx';
import CatOld from '../components/cat_old.tsx';
import Footer from '../components/footer.tsx';
import Head from '../components/head.tsx';


const Sights: React.FC = () => {
  return (
    <div>
        <Head />
        <Navbar />
        <CatBanner />
        <div id='one-year-to-seven-years'>
        <CatSeven />
        </div>
        <div id='seven-years-and-older'>
        <CatOld />
        </div>
        <Footer />

    </div>
  );
};

export default Sights;