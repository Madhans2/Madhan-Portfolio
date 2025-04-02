import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = ["hero", "about", "skills", "projects", "contact"];

const ScrollIndicator = ({ setActiveSection }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let index = 0;
      sections.forEach((id, i) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top < window.innerHeight / 2) {
            index = i;
          }
        }
      });
      setActiveIndex(index);
      setActiveSection(sections[index]); // Update active section
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  // Function to scroll to a section when clicked
  const handleClick = (index) => {
    const section = document.getElementById(sections[index]);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);
      setActiveSection(sections[index]); // Update active section state
    }
  };

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center z-[100]">
      {/* Scroll Line */}
      <div className="relative flex flex-col items-center space-y-4 text-gray-400 text-sm">
        {/* Vertical Line that Colors Based on Scroll */}
        <motion.div
          className="absolute left-7 transform -translate-x-1/2 w-[2px] bg-white"
          initial={{ height: "0%" }}
          animate={{ height: `${(activeIndex / (sections.length - 1)) * 100}%` }}
          transition={{ duration: 0.5 }}
        ></motion.div>

        {/* Numbers (00 for Hero, 01 for About, etc.) */}
        {sections.map((_, index) => (
          <motion.span
            key={index}
            className={`cursor-pointer transition-colors duration-300 ${
              index === activeIndex ? "text-white font-bold" : "text-gray-400"
            }`}
            animate={{ opacity: index === activeIndex ? 1 : 0.5 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleClick(index)} // Click to activate section
          >
            0{index}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
