import { Badge } from './ui/badge';
import React from "react";

const LatestJobCards = () => {
    return (
        <div className="">
            <div>
                <h1>Company Name</h1>
                <p>India</p>
            </div>
            <div>
                <h1>Job Title</h1>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div>
                <Badge className=" text-blue-500 font-bold" variant='ghost'>12 Positions</Badge>
                <Badge className=" text-amber-600 font-bold" variant='ghost'>Part Time</Badge>
                <Badge className=" text-green-500 font-bold" variant='ghost'>24 LPA</Badge>

            </div>
        </div>

    );
};

export default LatestJobCards;
