import React from "react";
import Link from "next/link";

interface CTAButtonProps {
  href: string;
  text: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({
  href,
  text,
  variant = "primary",
  size = "lg",
  className = "",
}) => {
  const baseStyles = "font-bold rounded-2xl transition-colors duration-300";
  
  const sizeStyles = {
    sm: "px-6 py-2 text-base",
    md: "px-8 py-3 text-lg",
    lg: "px-8 py-4 text-xl",
  };

  const variantStyles = {
    primary: "bg-white text-[#0A5470] hover:bg-gray-100",
    secondary: "border-2 border-white text-white hover:bg-white hover:text-[#0A5470]",
    outline: "border-2 border-[#0A5470] text-[#0A5470] hover:bg-[#0A5470] hover:text-white",
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
    >
      {text}
    </Link>
  );
};

export default CTAButton;