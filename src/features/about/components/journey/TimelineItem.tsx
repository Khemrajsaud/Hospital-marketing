"use client";

import React from "react";
import { TimelineIcon } from "./TimelineIcon";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  iconName: "stethoscope" | "activity" | "globe" | "sparkles";
  align: "left" | "right";
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  description,
  iconName,
  align,
}) => {
  const isRight = align === "right";

  return (
    <div className="relative">
      <TimelineIcon iconName={iconName} />

      <div
        className={`flex flex-col md:flex-row items-center md:items-start ${
          isRight ? "md:justify-end" : "md:justify-start"
        }`}
      >
        <div
          className={`w-full md:w-5/11 ${
            isRight
              ? "md:ml-auto md:pl-8 lg:pl-12"
              : "md:mr-auto md:pr-8 lg:pr-12"
          }`}
        >
          <div
            className={`bg-white rounded-2xl p-3 md:p-5 shadow-lg border-t-4 md:border-t-0 ${
              isRight
                ? "md:border-l-4 border-l-[#01BAEF]"
                : "md:border-r-4 border-r-[#01BAEF]"
            } transition-all duration-300 hover:shadow-[0_0_20px_#01BAEF80,0_0_40px_#01BAEF40]`}
          >
            <p className="text-[#01BAEF] font-bold text-lg md:text-xl">
              {year}
            </p>
            <h3 className="text-[#0B4F6C] font-bold text-lg md:text-xl">
              {title}
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base font-semibold">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
