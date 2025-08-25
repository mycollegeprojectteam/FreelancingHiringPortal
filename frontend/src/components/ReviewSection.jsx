import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Theresa Jordan",
    role: "Traveler",
    text: "I think this is the best camping service I have ever tried and I recommend it to you.",
    img: "https://i.pravatar.cc/50?img=32",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "Camper",
    text: "Camply helped me a lot in finding interesting camping destinations.",
    img: "https://i.pravatar.cc/50?img=12",
    rating: 4,
  },
  {
    name: "Jhon Tosan",
    role: "Adventurer",
    text: "Fun, from the city of waters not too far. Beautiful views, pretty and cool!",
    img: "https://i.pravatar.cc/50?img=22",
    rating: 5,
  },
  {
    name: "Anna Smith",
    role: "Explorer",
    text: "Amazing experience! The service was top-notch and the spots were breathtaking.",
    img: "https://i.pravatar.cc/50?img=36",
    rating: 5,
  },
  {
    name: "David Lee",
    role: "Traveler",
    text: "Very well organized and professional. I’ll definitely book again.",
    img: "https://i.pravatar.cc/50?img=44",
    rating: 4,
  },
  {
    name: "Sophia Brown",
    role: "Camper",
    text: "I loved the locations suggested. Made my trip memorable!",
    img: "https://i.pravatar.cc/50?img=18",
    rating: 5,
  },
];

const ReviewSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  // Get only 4 reviews at a time
  const visibleReviews = reviews.slice(startIndex, startIndex + visibleCount);

  // Handle next
  const handleNext = () => {
    if (startIndex + visibleCount < reviews.length) {
      setStartIndex(startIndex + 1);
    }
  };

  // Handle previous
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-white p-10 rounded-2xl shadow-md max-w-full mx-auto text-center ml-12 mr-12 mb-12 transition duration-500 ease-in-out">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
        Satisfied Customers Are Our <span className="text-[#1DA1F2]">  Best Ads. </span>
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {visibleReviews.map((review, index) => (
          <div
            key={index}
            className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-lg transition text-left"
          >
            <h2 className='text-7xl text-[#1DA1F2]'>“</h2>
            <p className="text-gray-700 italic mb-4">“{review.text}”</p>
            <div className="flex items-center gap-3">
              <img
                src={review.img}
                alt={review.name}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.role}</p>
                <div className="flex mt-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`p-3 rounded-full ${
            startIndex === 0 ? "bg-gray-200" : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= reviews.length}
          className={`p-3 rounded-full ${
            startIndex + visibleCount >= reviews.length
              ? "bg-gray-200"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default ReviewSection;
