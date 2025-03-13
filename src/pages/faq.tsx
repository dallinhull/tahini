import React from 'react';
import Navbar from '../components/navbar';
import PexpertBanner from '../components/pexpert_banner';
import Footer from '../components/footer';
import Head from '../components/head';
import FaqQuestions from '../components/faq_questions';



const FAQ: React.FC = () => {
  return (
    <div>
        <Head />
        <Navbar />
        <PexpertBanner />
        <FaqQuestions />
        <Footer />


    </div>
  );
};

export default FAQ;