import React from "react";
import LatestJobCards from "./LatestJobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
    return (
       <div className="max-w-7xl mx-auto my-20 px-4 sm:px-6 lg:px-8">
    <h1 className="text-4xl font-bold mb-12">Latest <span className="text-[#1DA1F2]"> Job Openings</span></h1>

    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5">
        {randomJobs.slice(0, 6).map((item, index) => (
            <LatestJobCards key={index} />
        ))}
    </div>
</div>

    )
}

export default LatestJobs;