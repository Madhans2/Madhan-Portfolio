import React from "react";
import heroBg from "../assets/hero-image.jpg"; // Desktop Image
import mobileHeroBg from "../assets/mobile-hero.jpg";
import { ScrollIndicator } from "./ScrollIndicator";
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col md:flex-row items-center h-screen bg-black text-white px-6 md:px-16 overflow-hidden">
      
      {/* Left Content (Text) */}
      <div className="max-w-lg text-center md:text-left z-10 order-2 md:order-1">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          MADHAN
          <Typewriter
            options={{
              strings: ['Full Stack Dev', 'Designer', 'Coder'],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          "Solving complex design challenges, building intuitive and dynamic user interfaces, 
          and developing robust full-stack web applications from front-end to back-end."
        </p>
        <div className="mt-6">
          <a
            href="#about"
            className="text-purple-500 hover:underline text-lg font-semibold"
          >
            About me →
          </a>
        </div>
      </div>

      {/* Right Side Image (Desktop View) */}
      <div
        className="hidden md:block md:absolute top-0 right-0 w-1/2 h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Mobile View Image */}
      <div className="md:hidden w-40 h-40 mt-32 rounded-full overflow-hidden mb-6">
        <img src={mobileHeroBg} alt="Mobile Hero" className="w-full h-full object-cover" />
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 right-8 flex flex-col items-center z-10">
        <span className="text-gray-400 text-sm rotate-90">Scroll Down</span>
        <div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center mt-2">
          <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
