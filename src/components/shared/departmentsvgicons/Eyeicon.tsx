import React from "react";

const EyeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="50" cy="50" r="45" fill="white" stroke="#ccc" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="22" fill="#333" />

    <defs>
      <radialGradient id="irisGrad">
        <stop offset="20%" stopColor="#000" />
        <stop offset="50%" stopColor="#444" />
        <stop offset="90%" stopColor="#222" />
      </radialGradient>
    </defs>
    <circle cx="50" cy="50" r="20" fill="url(#irisGrad)" />

    <circle cx="50" cy="50" r="8" fill="black" />
    <circle cx="44" cy="44" r="3" fill="white" fillOpacity="0.6" />
  </svg>
);

export default EyeIcon;