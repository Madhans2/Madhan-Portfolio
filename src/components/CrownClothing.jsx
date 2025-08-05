import React from "react";
import Weather from "../assets/weather.png";

const CrownClothing = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-black text-white px-4 md:px-10 py-6 md:py-12 text-center md:text-left">
      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h3 className="text-gray-400 uppercase tracking-widest text-sm">Weather App</h3>
        <h2 className="text-4xl md:text-5xl font-bold my-4">Sky_Cast</h2>
        <p className="text-gray-400 mb-4">Find the Weather</p>

        <p className="text-gray-400 text-sm">
          <strong className="text-white">Built with:</strong> React, Vite, Node, JavaScript, MongoDB, TailwindCSS, ExpressJS.
        </p>

        {/* Buttons */}
        <div className="mt-6">
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

      {/* Right Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <img
          src={Weather}
          alt="Weather App Preview"
          className="w-80 h-60 md:w-96 md:h-72 rounded-lg"
        />
      </div>
    </div>
  );
};

export default CrownClothing;
