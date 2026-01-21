import React from "react";
import { Heart } from "lucide-react";

const WhoWeAreSection = () => {
  return (
    <div className="bg-white py-16 md:py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-[#0B4F6C]">Who </span>
              <span className="text-[#01BAEF]">We Are</span>
            </h2>

            <div className="space-y-6 text-gray-800 text-base md:text-lg leading-relaxed font-semibold">
              <p>
                We're a passionate team of healthcare professionals,
                technologists, and innovators united by a common mission: to
                transform how people access and experience healthcare.
              </p>

              <p>
                Founded in 2016, we recognized that traditional healthcare
                systems often create unnecessary barriers between patients and
                the care they need. Long wait times, limited access to
                specialists, and geographic constraints shouldn't prevent anyone
                from receiving quality medical attention.
              </p>

              <p>
                Today, we're proud to serve over 10,000 patients across all 50
                states, connecting them with board-certified physicians through
                our secure, easy-to-use telemedicine platform.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative rounded-3xl overflow-hidden p-8 max-w-lg">
              <img
                src="/doctors2.png"
                alt="Healthcare team"
                className="w-full h-auto object-cover rounded-2xl"
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
