import React from "react";
import chillup from "../assets/chillup.png";

const CrownClothing = ({ setActiveSection }) => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-black text-white px-6 md:px-10 relative text-center md:text-left">
      

      {/* Left Section - Text Content */}
      <div className="w-full md:w-1/2">
        <h3 className="text-gray-400 uppercase tracking-widest text-sm">E-COMMERCE APPLICATION</h3>
        <h2 className="text-4xl md:text-5xl font-bold my-4">Chill Up</h2>
        <p className="text-gray-400 mb-4">Online booking Table or Ordering Coffee.</p>  

        <p className="text-gray-400 text-sm">
          <strong className="text-white">Built with:</strong> React, Vite, Node, JavaScript, MongoDB, TailwindCss, ExpressJS.
        </p>

        {/* Buttons */}
        <div className="mt-6 space-y-2">
          <a href="#" className="block text-blue-400 hover:underline">View the code →</a>
          <a href="#" className="block text-yellow-400 hover:underline">Visit the app →</a>
        </div>
      </div>

       {/* Right Section - Image for Mobile First */}
       <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <img
          src={chillup}
          alt="Chill Up App Preview"
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
