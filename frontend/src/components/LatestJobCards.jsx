import { Badge } from './ui/badge';
import React from "react";
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';

const LatestJobCards = () => {
    return (
       <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-xl transition">
             
             {/* Top bar */}
             <div className="flex items-center justify-between text-gray-400 text-sm">
               <p>2 days ago</p>
               <Button variant="outline" size="icon" className="rounded-full p-2 hover:bg-gray-100">
                 <Bookmark />
               </Button>
             </div>
       
             {/* Company Info */}
             <div className="flex items-center gap-3">
               <Avatar className="w-12 h-12">
                 <AvatarImage 
                   src="https://freepnglogo.com/images/all_img/target-circle-logo-png.png" 
                   alt="Company Logo" 
                 />
               </Avatar>
               <div className="flex flex-col">
                 <h3 className="font-semibold text-gray-900 text-lg">Company Name</h3>
                 <p className="text-gray-500 text-sm">India</p>
               </div>
             </div>
       
             {/* Job Info */}
             <div>
               <h2 className="text-xl font-bold text-gray-900">Job Title</h2>
               <p className="text-gray-600 text-sm mt-1 line-clamp-3">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro eum quisquam excepturi illo tenetur quo voluptas? Tempora, nulla maiores!
               </p>
             </div>
       
             {/* Badges */}
             <div className="flex flex-wrap gap-2 mt-2">
               <Badge variant="outline" className="text-[#1DA1F2] font-medium">Part Time</Badge>
               <Badge variant="outline" className="text-[#f1882c] font-medium">Remote</Badge>
               <Badge variant="outline" className="text-[#f21df2] font-medium">24 LPA</Badge>
             </div>
       
             {/* Actions */}
             <div className="flex items-center gap-3 mt-4">
               <Button variant="outline" className="flex-1 hover:bg-gray-100">Details</Button>
               <Button className="flex-1 bg-[#1DA1F2] hover:bg-[#1686cb] text-white">Save For Later</Button>
             </div>
           </div>

    );
};

export default LatestJobCards;
