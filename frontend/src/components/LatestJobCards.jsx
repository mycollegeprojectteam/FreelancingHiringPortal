import { Badge } from './ui/badge';
import React from "react";

const LatestJobCards = () => {
    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer">
            <div>
                <h1>Company Name</h1>
                <p>India</p>
            </div>
            <div>
                <h1>Job Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className=" text-blue-500 font-bold" variant='ghost'>12 Positions</Badge>
                <Badge className=" text-amber-600 font-bold" variant='ghost'>Part Time</Badge>
                <Badge className=" text-green-500 font-bold" variant='ghost'>24 LPA</Badge>

            </div>
        </div>

    );
};

export default LatestJobCards;
