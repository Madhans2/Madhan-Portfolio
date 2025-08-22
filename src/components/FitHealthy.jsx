import React from "react";
import Todo from "../assets/todo.png";

const FitHealthy = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-black text-white px-4 md:px-10 py-6 md:py-12 text-center md:text-left">
      
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0">
        <img
          src={Todo}
          alt="Todo App Preview"
          className="w-80 h-60 md:w-96 md:h-72 rounded-lg"
        />
      </div>

      {/* Right Section - Text Content */}
      <div className="w-full md:w-1/2">
        <h3 className="text-gray-400 uppercase tracking-widest text-sm">Todo Application</h3>
        <h2 className="text-4xl md:text-5xl font-bold my-4">Todo_App</h2>
        {/* Buttons */}
        <div className="mt-6">
          <a
            href="https://todo-app1-jade.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline font-bold"
          >
            Visit the app →
          </a>
        </div>
        <p className="text-gray-400 mb-4">
          A Todo List helps organize, prioritize, and track tasks to improve productivity and time management.
        </p>

        <p className="text-gray-400 text-sm">
          <strong className="text-white">Built with:</strong> React, Vite, Node, JavaScript, 
          MongoDB, TailwindCSS, ExpressJS.
        </p>
      </div>
    </div>
  );
};

export default FitHealthy;
