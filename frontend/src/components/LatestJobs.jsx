import React from "react";
import LatestJobCards from "./LatestJobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
    return (
        <div className='max-w-7xl mx-auto my-20 text-center'>
            <h1 className='text-4xl font-bold mb-4'>Latest Job Openings</h1>
            {/* map through latest jobs and display them */}

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-5'>
                {
                    randomJobs.slice(0, 6).map((item, index) => (
                        <LatestJobCards />
                    ))

                }
            </div>
        </div>
    )
}

export default LatestJobs;