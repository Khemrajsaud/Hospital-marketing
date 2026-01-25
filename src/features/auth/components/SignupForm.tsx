"use client";

import { useState } from "react";
import { Eye, EyeOff, UserPlus } from "lucide-react";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <form className="space-y-5">
      <div>
        <label
          htmlFor="fullname"
          className="block text-md font-semibold text-gray-700 mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          id="fullname"
          placeholder="John Doe"
          className="w-full px-4 py-3 text-gray-400 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-md font-semibold text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="user@example.gmail.com"
          className="w-full px-4 py-3 text-gray-400 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block text-md font-semibold text-gray-700 mb-1"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="• • • • • • • •"
            className="w-full px-4 py-3 pr-12 text-gray-400 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showPassword ? (
              <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        </div>
      </div>

      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-md font-semibold text-gray-700 mb-1"
        >
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            placeholder="• • • • • • • •"
            className="w-full px-4 py-3 pr-12 text-gray-400 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2"
          >
            {showConfirmPassword ? (
              <EyeOff className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            ) : (
              <Eye className="w-5 h-5 text-gray-400 hover:text-gray-600" />
            )}
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <input
          id="terms"
          type="checkbox"
          className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
          I agree to the{" "}
          <a href="#" className="text-cyan-600 hover:text-cyan-800 font-medium">
            Terms and Conditions
          </a>
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-[#0B4F6C] text-white py-3 rounded-lg font-medium hover:bg-[#094563] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mb-4"
      >
        <UserPlus className="w-5 h-5" />
        Sign Up
      </button>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-gray-600 font-medium my-4">
            or continue with
          </span>
        </div>
      </div>

      <button
        type="button"
        className="w-full border border-gray-300 rounded-lg py-3 px-4 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors mt-2"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.51h5.84c-.25 1.31-.98 2.42-2.07 3.16v2.63h3.35c1.96-1.81 3.09-4.47 3.09-7.99z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-1.01 7.28-2.73l-3.35-2.63c-1.01.68-2.29 1.08-3.93 1.08-3.02 0-5.58-2.04-6.49-4.79H.96v2.67C2.77 20.39 6.62 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.51 14.21c-.23-.68-.36-1.41-.36-2.21s.13-1.53.36-2.21V7.34H.96C.35 8.85 0 10.39 0 12s.35 3.15.96 4.66l4.55-2.45z"
            fill="#FBBC05"
          />
          <path
            d="M12 4.98c1.64 0 3.11.56 4.27 1.66l3.19-3.19C17.46 1.01 14.97 0 12 0 6.62 0 2.77 2.61.96 6.34l4.55 2.45C6.42 6.02 8.98 4.98 12 4.98z"
            fill="#EA4335"
          />
        </svg>
        <span className="font-medium text-gray-700">Sign up with Google</span>
      </button>

      <p className="text-center text-sm text-gray-600 mt-6">
        Already have an account?{" "}
        <a href="#" className="text-cyan-600 hover:text-cyan-800 font-medium">
          Log in
        </a>
      </p>
    </form>
  );
}