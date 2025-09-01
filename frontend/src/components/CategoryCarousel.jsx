import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const categories = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "UI/UX Designer",
  "Data Scientist",
  "Graphic Designer",
  "Data Entry",
  "Content Writing",
  "Copy Writing",
];

const CategoryCarousel = () => {
  return (
    <div className="w-full my-12 flex justify-center">
      <div className="relative w-full max-w-5xl px-6">
        <Carousel opts={{ loop: true }}>
          <CarouselContent className="flex gap-6">
            {categories.map((cat, index) => (
              <CarouselItem
                key={index}
                className="basis-1/1 sm:basis-1/2 lg:basis-1/3 flex justify-center"
              >
                <Button
                  variant="ghost"
                  className="w-full max-w-sm rounded-xl border border-gray-200 bg-white/70 backdrop-blur-sm text-gray-800 shadow-sm hover:shadow-md hover:bg-white transition-all duration-200"
                >
                  {cat}
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full shadow-lg bg-white/80 hover:bg-white transition-all duration-200" />
          <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-9 h-9 rounded-full shadow-lg bg-white/80 hover:bg-white transition-all duration-200" />
        </Carousel>
      </div>
    </div>
  );
};

export default CategoryCarousel;
