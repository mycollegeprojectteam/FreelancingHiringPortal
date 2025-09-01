import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="max-w-[1250px] mx-auto text-center mt-16 px-4">
      {/* Tagline */}
      <span className="px-4 py-1 rounded-full bg-blue-50 text-[#1DA1F2] text-sm font-medium">
        🚀 No.1 Freelancing Portal
      </span>

      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-extrabold mt-6 leading-tight">
        Search, Apply & <br /> 
        Get Your <span className="bg-gradient-to-r from-[#1DA1F2] to-blue-400 text-transparent bg-clip-text">Dream Jobs</span>
      </h1>

      {/* Subtext */}
      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Find the best opportunities from top companies and grow your career with ease.  
      </p>

      {/* Search bar */}
      <div className="flex w-full max-w-2xl shadow-md border border-gray-200 rounded-full items-center mx-auto mt-8 bg-white overflow-hidden">
        <input
          type="text"
          placeholder="Find your dream jobs..."
          className="flex-1 border-none outline-none px-5 py-3 text-gray-700 text-base"
        />
        <Button className="rounded-none rounded-r-full px-6 py-6 bg-[#1DA1F2] hover:bg-blue-500 transition-all">
          <Search className="h-5 w-5 text-white" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
