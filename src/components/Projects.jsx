import React from "react";

const Projects = ({ setActiveSection }) => {
  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center mt-20 bg-black text-white px-6 md:px-10 relative text-center"
    >
      {/* Title */}
      <h2 className="text-3xl md:text-5xl md:mt-20 font-bold mb-4">
        Portfolio & Previous Projects
      </h2>

      {/* Description */}
      <p className="text-gray-400 max-w-lg md:max-w-2xl mb-6">
        I have built various different projects to fit different aspects of the client's
        business. If you want to see more examples of my work than the ones showcased on this site,
        please <span className="text-yellow-400 font-bold">contact me!</span>
      </p>

      {/* See Projects Button */}
      <a
        onClick={() => setActiveSection("crownClothing")}
        className="mt-6 md:absolute md:bottom-96 text-purple-400 hover:underline text-lg font-semibold cursor-pointer"
      >
        See Projects →
      </a>

      {/* Pagination Dots */}
      <div className="absolute bottom-40 md:bottom-40 flex space-x-4">
        <button
          onClick={() => setActiveSection("projects")}
          className="w-4 h-4 bg-white rounded-full opacity-100"
        ></button>

        <button
          onClick={() => setActiveSection("crownClothing")}
          className="w-4 h-4 bg-white rounded-full opacity-50"
        ></button>

        <button
          onClick={() => setActiveSection("FitHealthy")}
          className="w-4 h-4 bg-white rounded-full opacity-50"
        ></button>
      </div>
    </section>
  );
};

export default Projects;
