import React from "react";
import { Heart } from "lucide-react";
import Image from 'next/image';
import AnimatedWhoWeAreContent from "./AnimatedWhoWeAreContent";

const WhoWeAreSection = () => {
  return (
    <div className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedWhoWeAreContent />

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative rounded-3xl overflow-hidden p-8 max-w-lg w-full aspect-[4/3]"> 
              <Image
                src="/doctors2.png"
                alt="Healthcare team"
                fill
                className="object-cover rounded-2xl"
                priority 
              />

              <div className="absolute bottom-4 left-4 bg-gradient-to-r from-[#0A5470] via-[#096686] to-[#03ABDD] text-white rounded-2xl px-6 py-4 shadow-xl flex items-start gap-3 min-w-[140px]">
                <div className="bg-white/20 p-2 rounded-lg mt-1">
                  <Heart className="w-5 h-5 fill-white text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold leading-tight">1000+</div>
                  <div className="text-sm opacity-95 leading-tight">
                    Life Improved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreSection;