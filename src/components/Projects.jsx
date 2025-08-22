import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import CrownClothing from "./CrownClothing";
import FitHealthy from "./FitHealthy";
import Quickpick from "./QuickPick"; // ✅ New project import

const Projects = ({ setActiveSection }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showProjects, setShowProjects] = useState(false);

  // ✅ Add Quickpick to the array
  const projectComponents = [<CrownClothing />, <FitHealthy />, <Quickpick />];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projectComponents.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectComponents.length - 1 : prevIndex - 1
    );
  };

  const goToProject = (index) => {
    setCurrentIndex(index);
    setShowProjects(true);
  };

  return (
    <section
      id="projects"
      className={`min-h-screen flex flex-col items-center ${
        showProjects ? "mt-10" : "mt-20"
      } bg-black text-white px-4 md:px-10 relative text-center`}
    >
      {/* Title */}
      <h2
        className={`text-3xl md:text-5xl font-bold ${
          showProjects ? "mb-2" : "mb-6"
        }`}
      >
        Portfolio & Previous Projects
      </h2>

      {/* Description */}
      <p
        className={`text-gray-400 max-w-md md:max-w-2xl ${
          showProjects ? "mb-2" : "mb-6"
        }`}
      >
        I have built various different projects to fit different aspects of the
        client's business. If you want to see more examples of my work than the
        ones showcased on this site, please{" "}
        <span className="text-yellow-400 font-bold">contact me!</span>
      </p>

      {/* See Projects Button */}
      {!showProjects && (
        <button
          onClick={() => setShowProjects(true)}
          className="mt-4 text-purple-400 hover:underline text-lg font-semibold"
        >
          See Projects →
        </button>
      )}

      {/* Projects Carousel */}
      {showProjects && (
        <div className="relative w-full max-w-5xl flex items-center justify-center mt-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-0 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 z-10"
          >
            <FaArrowLeft />
          </button>

          {/* Project Component */}
          <div className="w-full flex justify-center items-center">
            {projectComponents[currentIndex]}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:right-0 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 z-10"
          >
            <FaArrowRight />
          </button>
        </div>
      )}

      {/* Pagination Dots */}
      <div className="mt-6 flex space-x-3">
        {projectComponents.map((_, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`w-4 h-4 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Projects;
