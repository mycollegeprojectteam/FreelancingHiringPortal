import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff] m-4 rounded-xl shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top CTA Section */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Find & Hire The Best{" "}
            <span className="text-[#1DA1F2]">Freelancers</span> For Your Projects
          </h2>
          <p className="text-gray-600 mt-2 text-sm">
            Join Skill<span className="text-[#1DA1F2]">Factory</span> and
            connect with top talent or your next career opportunity.
          </p>

          <div className="mt-6 flex justify-center">
            <div className="flex w-full max-w-md rounded-full overflow-hidden border border-gray-200">
              <input
                type="email"
                placeholder="Enter your email to get started"
                className="w-full px-4 py-2 focus:outline-none"
              />
              <button className="bg-[#1DA1F2] hover:bg-[#1686cb] text-white px-6 py-2 font-medium">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold text-black">
              Skill<span className="text-[#1DA1F2]">Factory</span>
            </h1>
            <p className="text-gray-600 mt-3 text-sm">
              A platform that connects businesses with top freelancers and helps
              professionals land their dream jobs.
            </p>
          </div>

          {/* For Freelancers */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">For Freelancers</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link to="/">Find Work</Link></li>
              <li><Link to="/">Create Profile</Link></li>
              <li><Link to="/">Success Stories</Link></li>
              <li><Link to="/">Guides & Resources</Link></li>
            </ul>
          </div>

          {/* For Employers */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">For Employers</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link to="/">Post a Job</Link></li>
              <li><Link to="/">Browse Freelancers</Link></li>
              <li><Link to="/">Enterprise Solutions</Link></li>
              <li><Link to="/">Hiring Guides</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Connect With Us</h3>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="https://facebook.com" className="text-gray-500 hover:text-[#1DA1F2]">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-[#1DA1F2]">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-[#1DA1F2]">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-500 hover:text-[#1DA1F2]">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © 2024 SkillFactory. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
