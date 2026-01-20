"use client";

import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const SocialLinks: React.FC = () => {
  return (
    <div className="flex gap-4">
      <a
        href="#"
        className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#01BAEF] hover:text-[#01BAEF] transition-colors"
        aria-label="Facebook"
      >
        <Facebook className="w-4 h-4" />
      </a>
      <a
        href="#"
        className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#01BAEF] hover:text-[#01BAEF] transition-colors"
        aria-label="Instagram"
      >
        <Instagram className="w-4 h-4" />
      </a>
      <a
        href="#"
        className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#01BAEF] hover:text-[#01BAEF] transition-colors"
        aria-label="Twitter"
      >
        <Twitter className="w-4 h-4" />
      </a>
      <a
        href="#"
        className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center hover:border-[#01BAEF] hover:text-[#01BAEF] transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin className="w-4 h-4" />
      </a>
    </div>
  );
};

export default SocialLinks;