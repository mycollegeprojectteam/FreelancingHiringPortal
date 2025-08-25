import React from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";


const HeroSection = () => {
  return (
    <div className="text-center mt-12">
      <span className="px-4 py-2 text-[#1DA1F2] font-medium">No.1 Freelancing Portal</span>
      <h1 className="text-5xl md:text-5xl font-bold mt-6">Search, Apply & <br /> Get Your <span className="text-[#1DA1F2]">Dream Jobs</span></h1>
      <p className="m-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, modi!</p>
      <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center mx-auto mt-6 gap-4">
        <input type="text" placeholder="Find your dream jobs" className="border-none outline-none w-full p-2 " />
        <Button className=" rounded-r-full p-5 bg-[#1DA1F2] ">
          <Search className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
};

export default HeroSection;
