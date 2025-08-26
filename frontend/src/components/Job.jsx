import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge"; 
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";

const Job = () => {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 gap-4 space-y-4">
      {/* Top bar */}
      <div className="flex items-center justify-between text-gray-500 text-sm mt-[-14px]">
        <p className="text-sm text-gray-500">2 days ago</p>
        <Button variant="outline" size="icon" className="rounded-full">
          <Bookmark />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarImage 
            src="https://freepnglogo.com/images/all_img/target-circle-logo-png.png" 
            alt="Company Logo" 
          />
        </Avatar>
        <div>
          <h3 className="font-semibold text-lg">Company Name</h3>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Info */}
      <div>
        <h2 className="text-lg font-bold">Job Title</h2>
        <p className="text-sm text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro eum quisquam excepturi illo tenetur quo voluptas? Tempora, nulla maiores!
        </p>
      </div>

      {/* Badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <Badge variant="outline" className="text-[#1DA1F2] font-medium">Part Time</Badge>
        <Badge variant="outline" className="text-[#f1882c] font-medium">Remote</Badge>
        <Badge variant="outline" className="text-[#f21df2] font-medium">24 LPA</Badge>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <Button variant='outline'>Details</Button>
        <Button className="bg-[#1DA1F2]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
