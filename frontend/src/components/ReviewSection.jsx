import React, { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

const reviews = [
  { name: "Theresa Jordan", role: "Traveler", text: "I think this is the best camping service I have ever tried and I recommend it to you.", img: "https://i.pravatar.cc/50?img=32", rating: 5, },

  { name: "James Wilson", role: "Camper", text: "Camply helped me a lot in finding interesting camping destinations.", img: "https://i.pravatar.cc/50?img=12", rating: 4, },

  { name: "Theresa Jordan", role: "Traveler", text: "I think this is the best camping service I have ever tried and I recommend it to you.", img: "https://i.pravatar.cc/50?img=32", rating: 5, },

  { name: "James Wilson", role: "Camper", text: "Camply helped me a lot in finding interesting camping destinations.", img: "https://i.pravatar.cc/50?img=12", rating: 4, },

  { name: "Theresa Jordan", role: "Traveler", text: "I think this is the best camping service I have ever tried and I recommend it to you.", img: "https://i.pravatar.cc/50?img=32", rating: 5, },

  { name: "James Wilson", role: "Camper", text: "Camply helped me a lot in finding interesting camping destinations.", img: "https://i.pravatar.cc/50?img=12", rating: 4, },
];

const ReviewSection = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handleNext = () => {
    if (startIndex + visibleCount < reviews.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="bg-white p-10 rounded-2xl shadow-md max-w-7xl mx-auto text-center mb-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-12">
        Satisfied Customers Are Our <span className="text-[#1DA1F2]">Best Ads</span>
      </h2>

      {/* Carousel Wrapper */}
      <div className="overflow-hidden relative">
        {/* Sliding Container */}
        <div
          className="flex gap-6 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${startIndex * (100 / visibleCount)}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-[#ebebeb] p-6 rounded-xl shadow-lg hover:shadow-lg transition"
            >
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
      </div>

      {/* Arrows */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className={`p-3 rounded-full shadow-sm ${startIndex === 0
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
            }`}
        >
          <ArrowLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= reviews.length}
          className={`p-3 rounded-full shadow-sm ${startIndex + visibleCount >= reviews.length
            ? "bg-gray-200 cursor-not-allowed"
            : "bg-white hover:bg-gray-100"
            }`}
        >
          <ArrowRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
};

export default ReviewSection;
