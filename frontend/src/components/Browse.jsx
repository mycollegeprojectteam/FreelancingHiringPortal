import React from "react";
import Navbar from "./ui/shared/Navbar";
import Footer from "./Footer";
import Job from "./Job";

const randomJobs = [1, 2, 3, 4, 5, 6];

const Browse = () => {
    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center m-6">
                <div className="max-w-7xl mx-auto my-10">
                <h1 className="text-2xl font-bold my-10">Search Results ({randomJobs.length})</h1>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        randomJobs.length === 0 ? (
                            <p>No jobs found</p>
                        ) : (
                            randomJobs.map((item, index) => (
                                <Job key={index} />
                            ))
                        )
                    }
                </div>
            </div></div>
            
            <Footer />
        </div>
        
    );
};

export default Browse;