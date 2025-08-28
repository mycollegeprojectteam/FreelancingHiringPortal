import React from "react";
import Navbar from "./ui/shared/Navbar";
import Footer from "./Footer";
import FilterCard from "./FilterCard";
import Job from "./Job";

const jobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
    return (
        <div>
            <Navbar />
            <div className="flex justify-center">
                <div className="max-w-7xl mx-auto ">

                    <div className="flex gap-6 flex-col">
                        <div>
                            <FilterCard />
                        </div>
                        <div>
                            {
                                jobsArray.length === 0 ? <span>No jobs found</span> : (
                                    <div className="flex-1 pb-5">
                                        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4">
                                            {
                                                jobsArray.map((item, index) => (
                                                    <div key={index}>
                                                        <Job />
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>


                                )
                            }
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Jobs;