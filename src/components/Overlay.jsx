import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Overlay = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveSection(index);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      {/* Contact Button (Fixed at Top Right) */}
      <Link
        to="/contact"
        className="fixed top-8 right-8 border-2 border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
      >
        Contact
      </Link>

      {/* Right Side Scroll Indicator (Fixed) */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col items-center">
        <div className="relative flex flex-col items-center space-y-4 text-gray-400 text-sm">
          {/* Vertical Scroll Line Inside Numbers */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gray-600"></div>

          {/* Numbers - Active Section is Highlighted */}
          {[0, 1, 2, 3, 4].map((num) => (
            <span
              key={num}
              className={activeSection === num ? "text-white font-bold" : ""}
            >
              0{num}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Overlay;
