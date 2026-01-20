import React from "react";

const KidneyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="400"
    height="400"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M55 45 C55 30 75 25 85 35 C95 45 90 75 75 80 C65 83 58 75 55 60"
      fill="#333"
      stroke="#333"
      stroke-width="1"
      stroke-linejoin="round"
    />

    <path
      d="M45 45 C45 30 25 25 15 35 C5 45 10 75 25 80 C35 83 42 75 45 60"
      fill="#333"
      stroke="#333"
      stroke-width="1"
      stroke-linejoin="round"
    />

    <g stroke="white" stroke-width="1.5" fill="none" stroke-linecap="round">
      <path d="M55 60 Q65 55 75 60" />
      <path d="M68 57 L72 50" />
      <path d="M72 58 L78 54" />

      <path d="M45 60 Q35 55 25 60" />
      <path d="M32 57 L28 50" />
      <path d="M28 58 L22 54" />
    </g>

    <path
      d="M45 60 C45 80 48 90 48 95 M55 60 C55 80 52 90 52 95"
      stroke="#333"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
    />
  </svg>
);

export default KidneyIcon;
