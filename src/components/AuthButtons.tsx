"use client";

import React from 'react';

const AuthButtons = () => {
  const handleLogin = () => {
    // Login logic here
    console.log('Login clicked');
  };

  const handleSignup = () => {
    // Signup logic here
    console.log('Signup clicked');
  };

  return (
    <div className="flex items-center space-x-4">
      <button
        onClick={handleLogin}
        className="text-[#0A5470] hover:text-[#096686] font-semibold transition-colors"
      >
        Login
      </button>
      <button
        onClick={handleSignup}
        className="bg-[#0A5470] hover:bg-[#096686] text-white font-semibold px-6 py-2 rounded-lg transition-colors"
      >
        Sign Up
      </button>
    </div>
  );
};

export default AuthButtons;