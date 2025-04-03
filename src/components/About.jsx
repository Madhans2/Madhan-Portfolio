import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import aboutImage from "../assets/madhan.jpg"; // Ensure correct image path

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2) {
          controls.start({ opacity: 1, y: 0 });
        } else {
          controls.start({ opacity: 0, y: 100 });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <section id="about" className="relative flex flex-col md:flex-row items-center h-auto md:h-screen bg-black text-white px-6 md:px-16 overflow-hidden">

      {/* Left Content - Text */}
      <motion.div
        className="max-w-lg text-center md:text-left mt-6 md:mt-0 md:ml-12"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
        <h1 className="text-2xl md:text-3xl font-serif font-bold mt-4">I'M Madhan</h1>
        <p className="text-lg text-gray-400 mt-2 font-serif">
          <span className="font-serif font-bold">Welcome to my professional portfolio! </span>
          I'm Madhan, a Computer Science student at KPR Institute of Engineering and Technology, 
          passionate about web design and development.
          Skilled in HTML, CSS, JavaScript, and modern frameworks, I create responsive, user-friendly 
          websites while staying updated with the latest tech trends.
          Beyond coding, I explore design trends, work on personal projects, and collaborate on web development 
          ventures. My goal is to craft impactful digital solutions that are both aesthetic and functional.
        </p>
        <div className="mt-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-500 hover:underline text-lg font-semibold"
          >
            View Resume →
          </a> 
        </div>
      </motion.div>

       {/* Image (Centered on Mobile, Right on Desktop) */}
       <motion.div
        className="hidden md:block md:absolute  right-24 transform -translate-y-1/2 w-[350px] h-[450px] bg-cover bg-center bg-no-repeat rounded-lg border-2 border-gray-600 shadow-lg"
        style={{ backgroundImage: `url(${aboutImage})` }}
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
        transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
      ></motion.div>

    </section>
  );
};

export default About;
