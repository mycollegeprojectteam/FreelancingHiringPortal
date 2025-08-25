import React from 'react';
import Navbar from './ui/shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './Footer';
import ExtraSection from './ExtraSection';
import HowItWorks from './HowItWorks';

const Home = () => {
  return (
    <div>

        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        <ExtraSection />
        <HowItWorks />
        <LatestJobs />
        <Footer />

    </div>
  );
};

export default Home;
