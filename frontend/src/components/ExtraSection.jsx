import React from "react";

const ExtraSection = () => {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
    "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg",
    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
  ];

  return (
    <section className="py-12 bg-white border-gray-100 shadow-md">
      <div className="text-center max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Trusted by <span className="text-[#1DA1F2]">Top Companies</span>
        </h2>
        <p className="text-gray-600 m-t-3 mb-10">
          Building careers with the best in the industry
        </p>
      </div>

      {/* Logos Grid (Static) */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt="company logo"
            className="h-6 w-auto object-contain  grayscale hover:opacity-100 hover:grayscale-0 transform transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          />
        ))}
      </div>
    </section>
  );
};

export default ExtraSection;
