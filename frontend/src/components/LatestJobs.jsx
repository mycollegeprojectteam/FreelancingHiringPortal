import React from "react";
import LatestJobCards from "./LatestJobCards";
import { Button } from "@/components/ui/button"; // assuming shadcn/ui button

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const LatestJobs = () => {
  return (
    <div className="max-w-7xl mx-auto my-6 px-4 sm:px-6 lg:px-8">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">
          Latest <span className="text-[#1DA1F2]">Job Openings</span>
        </h1>
        <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
          Explore the newest opportunities tailored for you. Find your next role
          and take the next step in your career journey.
        </p>
      </div>

      {/* Job Cards Grid */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {randomJobs.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl rounded-xl"
          >
            <LatestJobCards />
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <Button className="rounded-full px-8 py-3 text-lg font-medium bg-[#1DA1F2] hover:bg-[#0d8ae6] text-white shadow-lg transition duration-300">
          View All Jobs
        </Button>
      </div>
    </div>
  );
};

export default LatestJobs;
