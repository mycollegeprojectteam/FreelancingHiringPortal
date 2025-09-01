import React from "react";
import Navbar from "./ui/shared/Navbar";
import Footer from "./Footer";
import Job from "./Job";

const randomJobs = [1, 2, 3, 4, 5, 6];

const Browse = () => {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full flex justify-center mt-8 px-4">
        <div className="max-w-7xl w-full">

          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Search Results <span className="text-gray-500">({randomJobs.length})</span>
            </h1>
            <p className="text-gray-600 text-sm mt-2 sm:mt-0">
              Showing top {randomJobs.length} jobs for you
            </p>
          </div>

          {/* Jobs Grid */}
          {randomJobs.length === 0 ? (
            <div className="text-center text-gray-500 text-lg mt-20">
              No jobs found
            </div>
          ) : (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {randomJobs.map((item, index) => (
                <Job key={index} />
              ))}
            </div>
          )}

          {/* Optional Load More */}
          {randomJobs.length > 0 && (
            <div className="flex justify-center mt-8">
              <button className="px-6 py-2 rounded-lg bg-[#1DA1F2] text-white font-medium hover:bg-[#1686cb] transition">
                Load More
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Browse;
