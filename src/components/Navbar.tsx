import React from "react";
import AuthButtons from "./AuthButtons";

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b-4 border-[#01BAEF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#0A5470]">
              Maya Metro Hospital
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8 font-semibold">
            <a
              href="/home"
              className="text-gray-700 hover:text-[#0A5470] transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-[#0A5470] transition-colors"
            >
              About Us
            </a>
            <a
              href="/doctor"
              className="text-gray-700 hover:text-[#0A5470] transition-colors"
            >
              Doctors
            </a>
            <a
              href="/service"
              className="text-gray-700 hover:text-[#0A5470] transition-colors"
            >
              Service
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-[#0A5470] transition-colors"
            >
              Contact
            </a>{" "}
            <a
              href="/news"
              className="text-gray-700 hover:text-[#0A5470] transition-colors"
            >
              News & Notice
            </a>
          </div>

          <AuthButtons />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
