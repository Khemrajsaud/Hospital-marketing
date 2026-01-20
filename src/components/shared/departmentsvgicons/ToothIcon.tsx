import React from "react";

const ToothIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M25 20C20 20 15 25 15 35C15 50 25 65 30 85C31 88 35 88 36 85C38 75 40 60 50 60C60 60 62 75 64 85C65 88 69 88 70 85C75 65 85 50 85 35C85 25 80 20 75 20C70 20 65 25 50 25C35 25 30 20 25 20Z"
      stroke="black"
      strokeWidth="2"
      fill="white"
      strokeLinejoin="round"
    />
    <path
      d="M30 35C40 40 60 40 70 35"
      stroke="black"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default ToothIcon;