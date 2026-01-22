"use client";

import React from "react";
import Link from "next/link";

const AuthButtons = () => {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <a
        href="/login"
        className="text-[#0A5470] hover:text-[#096686] font-bold transition-colors duration-200"
      >
        Login
      </a>

      <a
        href="/signup"
        className="bg-[#0A5470] hover:bg-[#096686] text-white font-bold px-6 py-2.5 rounded-lg transition-colors duration-200 shadow-sm hover:shadow active:scale-98"
      >
        Sign Up
      </a>
    </div>
  );
};

export default AuthButtons;
