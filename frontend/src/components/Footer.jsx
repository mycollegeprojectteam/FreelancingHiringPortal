import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-xl shadow-inner mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top CTA */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Hire Top <span className="text-[#1DA1F2]">Freelancers</span> Effortlessly
          </h2>
          <p className="text-gray-500 mt-2 text-sm">
            Connect with skilled professionals and grow your projects faster.
          </p>
        </div>

        {/* Links & Socials */}
        <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">
          {/* About */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">SkillFactory</h3>
            <p className="text-gray-500 text-sm">
              A platform connecting businesses with top freelancers worldwide.
            </p>
          </div>

          {/* Freelancers */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Freelancers</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><Link to="/" className="hover:text-[#1DA1F2]">Find Work</Link></li>
              <li><Link to="/" className="hover:text-[#1DA1F2]">Create Profile</Link></li>
              <li><Link to="/" className="hover:text-[#1DA1F2]">Resources</Link></li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Employers</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><Link to="/" className="hover:text-[#1DA1F2]">Post Job</Link></li>
              <li><Link to="/" className="hover:text-[#1DA1F2]">Browse Talent</Link></li>
              <li><Link to="/" className="hover:text-[#1DA1F2]">Guides</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Follow Us</h3>
            <div className="flex justify-center sm:justify-start gap-4">
              <a href="https://facebook.com" className="text-gray-500 hover:text-[#1DA1F2]"><Facebook className="w-5 h-5" /></a>
              <a href="https://twitter.com" className="text-gray-500 hover:text-[#1DA1F2]"><Twitter className="w-5 h-5" /></a>
              <a href="https://linkedin.com" className="text-gray-500 hover:text-[#1DA1F2]"><Linkedin className="w-5 h-5" /></a>
              <a href="https://instagram.com" className="text-gray-500 hover:text-[#1DA1F2]"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
          © 2024 SkillFactory. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
