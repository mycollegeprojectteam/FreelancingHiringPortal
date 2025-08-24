import React from 'react';
import Navbar from './ui/shared/Navbar';
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';

const Home = () => {
  return (
    <div>

        <Navbar />
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
        <h1>working</h1>

    </div>
  );
};

export default Home;
