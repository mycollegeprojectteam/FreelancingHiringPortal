import React from "react";
import Navbar from "./ui/shared/Navbar";
import Footer from "./Footer";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div className=" bg-blue-50 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-8">
          {/* Filters */}
          <div>
            <FilterCard />
          </div>

          {/* Jobs Listing */}
          <div>
            {jobsArray.length === 0 ? (
              <p className="text-center text-gray-500">No jobs found</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobsArray.map((item, index) => (
                  <Job key={index} />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Jobs;
