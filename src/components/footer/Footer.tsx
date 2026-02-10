import React from "react";
import Link from "next/link";
import ScrollToTopButton from "./ScrollToTopButton";
import SocialLinks from "./SocialLinks";
import AnimatedFooterContent from "./AnimatedFooterContent";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B4F6C] text-white">
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        <AnimatedFooterContent />

        <ScrollToTopButton />

        <div className="border-t border-[#1a5f7a] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2026 Logo. All rights reserved. Made with ❤️ for better healthcare.
            </p>

            <div className="flex gap-6">
              <Link href="#" className="text-gray-400 hover:text-[#01BAEF] transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#01BAEF] transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#01BAEF] transition-colors text-sm">
                Cookie Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#01BAEF] transition-colors text-sm">
                Disclaimer
              </Link>
            </div>

            <SocialLinks />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;