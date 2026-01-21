import React from "react";

const Bone: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="200"
    height="400"
    viewBox="0 0 100 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M45 10 C35 10 30 20 40 25 C42 27 45 25 48 30 C50 40 45 80 40 120 C35 160 30 180 35 190 C40 200 60 200 65 190 C70 180 65 160 60 120 C55 80 55 40 58 30 C60 25 65 20 60 15 C55 10 50 10 45 10Z"
      stroke="black"
      strokeWidth="2"
      fill="white"
      strokeLinejoin="round"
    />
    <path
      d="M42 15 C38 18 38 22 42 24"
      stroke="black"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.5"
    />
    <path
      d="M45 185 C50 182 55 182 60 185"
      stroke="black"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.5"
    />
  </svg>
);

export default Bone;