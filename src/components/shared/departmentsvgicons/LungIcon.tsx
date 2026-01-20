import React from "react";

const LungIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="400"
    height="400"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M47 10 L47 35 Q47 40 42 45 M53 10 L53 35 Q53 40 58 45"
      stroke="black"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    />
    <path
      d="M47 15 H53 M47 20 H53 M47 25 H53 M47 30 H53"
      stroke="black"
      strokeWidth="1"
      opacity="0.5"
    />
    <path
      d="M55 40 C75 35 90 45 85 75 C82 90 65 95 55 85 C50 80 53 50 55 40Z"
      fill="white"
      stroke="black"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M60 65 Q75 75 85 70"
      stroke="black"
      strokeWidth="0.8"
      fill="none"
      opacity="0.6"
    />
    <path
      d="M45 40 C25 35 10 45 15 75 C18 90 35 95 45 85 C50 80 47 50 45 40Z"
      fill="white"
      stroke="black"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path
      d="M40 60 Q25 70 15 65"
      stroke="black"
      strokeWidth="0.8"
      fill="none"
      opacity="0.6"
    />
  </svg>
);

export default LungIcon;