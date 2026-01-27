"use client";

import React from "react";
import { motion } from "framer-motion";

interface BookingButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  className?: string;
}

const buttonVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.4 },
  },
  hover: { scale: 1.02, transition: { duration: 0.3 } },
  tap: { scale: 0.98 },
};

const BookingButton: React.FC<BookingButtonProps> = ({
  onClick,
  disabled = false,
  isLoading = false,
  className = "",
}) => {
  return (
    <motion.button
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      type="submit"
      disabled={disabled || isLoading}
      onClick={onClick}
      className={`w-full bg-[#0B4F6C] hover:bg-[#083d54] text-white font-semibold py-4 rounded-xl text-base transition-colors duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 ${className}`}
    >
      {isLoading ? (
        <>
          <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
          Processing...
        </>
      ) : (
        <>
          Book Appointment
          <span className="text-lg">→</span>
        </>
      )}
    </motion.button>
  );
};

export default BookingButton;