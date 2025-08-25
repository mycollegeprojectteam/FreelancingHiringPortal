import React from "react";
import { CheckCircle, Search, Briefcase, Award } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="w-10 h-10 text-[#1DA1F2]" />,
      title: "Browse Jobs",
      desc: "Explore thousands of job opportunities tailored to your skills and preferences.",
    },
    {
      icon: <Briefcase className="w-10 h-10 text-[#1DA1F2]" />,
      title: "Apply Easily",
      desc: "Submit your applications quickly with our simple and fast process.",
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-[#1DA1F2]" />,
      title: "Get Shortlisted",
      desc: "Stand out with your profile and get noticed by top recruiters.",
    },
    {
      icon: <Award className="w-10 h-10 text-[#1DA1F2]" />,
      title: "Land Your Dream Job",
      desc: "Receive offers and kickstart your career with trusted companies.",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          How <span className="text-[#1DA1F2]">It Works</span>
        </h2>
        <p className="text-gray-600 mb-12">
          A simple and seamless process to land your dream job
        </p>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
