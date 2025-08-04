import React from "react";
import Weather from "../assets/weather.png";

const CrownClothing = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-black text-white px-6 md:px-10 relative text-center md:text-left">
      

      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2">
        <h3 className="text-gray-400 uppercase tracking-widest text-sm">Weather App</h3>
        <h2 className="text-4xl md:text-5xl font-bold my-4">Sky_Cast</h2>
        <p className="text-gray-400 mb-4">Find the Weather</p>  

        <p className="text-gray-400 text-sm">
          <strong className="text-white">Built with:</strong> React, Vite, Node, JavaScript, MongoDB, TailwindCss, ExpressJS.
        </p>

        {/* Buttons */}
        <div className="mt-6 space-y-2">
          <a
            href="https://sky-cast-zvsv.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline font-bold"
          >
            Visit the app →
          </a>
        </div>
      </div>

       {/* Right Section - Image for Mobile First */}
       <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <img
          src={Weather}
          alt="Weather App Preview"
          className="w-80 h-60 md:w-96 md:h-72 rounded-lg"
        />
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-10 flex space-x-4">
        <button
          onClick={() => setActiveSection("projects")}
          className="w-4 h-4 bg-white rounded-full opacity-50"
        ></button>
        
        <button
          onClick={() => setActiveSection("crownClothing")}
          className="w-4 h-4 bg-white rounded-full opacity-100"
        ></button>

        <button
          onClick={() => setActiveSection("fitHealthy")}
          className="w-4 h-4 bg-white rounded-full opacity-50"
        ></button>
      </div>
    </section>
  );
};

export default CrownClothing;
