import React, { useState } from "react";
import { motion } from "framer-motion";

const LoadingButton = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-block w-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Button */}
      <button
        className="relative z-10 px-6 py-3 text-white font-semibold bg-gray-500 rounded-full overflow-hidden border border-gray-500 focus:outline-none"
        onClick={onClick}
      >
        Submit
      </button>

      {/* Filling Animation */}
      <motion.div
        className="absolute inset-0 bg-purple-700 rounded-full z-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
};

export default LoadingButton;
