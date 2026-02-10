"use client";

import { useState } from "react";
import { Eye, EyeOff, LogIn } from "lucide-react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="space-y-5">
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

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember"
            type="checkbox"
            className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300 rounded"
          />
          <label
            htmlFor="remember"
            className="ml-2 block text-sm text-gray-700"
          >
            Remember me
          </label>
        </div>
        <a
          href="#"
          className="text-sm text-cyan-600 hover:text-cyan-800 font-medium"
        >
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-[#0B4F6C] text-white py-3 rounded-lg font-medium hover:bg-[#094563] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mb-4"
      >
        <LogIn className="w-5 h-5" />
        Login
      </button>
    </form>
  );
}