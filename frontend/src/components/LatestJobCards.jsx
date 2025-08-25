import { Badge } from './ui/badge';
import React from "react";

const LatestJobCards = () => {
    return (
        <div className="p-5 rounded-2xl shadow-lg hover:shadow-0xl bg-white border border-gray-100 cursor-pointer text-left">
            <div>
                <h1 className='font-medium text-lg'>Company Name</h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Job Title</h1>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo, sint doloribus! Veritatis distinctio autem quidem commodi, sunt in error ut.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className=" text-[#1DA1F2] font-bold" variant='ghost'>12 Positions</Badge>
                <Badge className=" text-[#1DA1F2] font-bold" variant='ghost'>Part Time</Badge>
                <Badge className=" text-[#1DA1F2] font-bold" variant='ghost'>24 LPA</Badge>

            </div>
        </div>

    );
};

export default LatestJobCards;
